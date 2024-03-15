import logging
import imaplib
import email
from email.header import decode_header

from .models import MailMessage
from apps.tickets.models import Ticket
from apps.clients.models import Client

logger = logging.getLogger(__name__)


def connect_to_email_server(host: str, user: str, password: str) -> imaplib.IMAP4_SSL:
    mailbox = 'INBOX'
    mail = imaplib.IMAP4_SSL(host)
    mail.login(user, password)
    mail.select(mailbox)
    return mail


def create_mail_message(ticket: Ticket, from_client: Client, content: str):
    new_mail_message = MailMessage(from_client=from_client, content=content,
                                   ticket=ticket, from_employee=None)
    new_mail_message.save()
    return new_mail_message


def get_or_create_client(full_name, email):
    if not Client.objects.filter(email=email).exists():
        client = Client(full_name=full_name, email=email)
        client.save()
        return client
    return Client.objects.get(email=email)


def get_or_create_ticket(title, client):
    new_ticket, is_created = Ticket.objects.get_or_create(
        title=title, client=client)
    return new_ticket, is_created


def create_new_messages(mail: imaplib.IMAP4_SSL) -> None:
    status, messages = mail.search(None, 'UNSEEN')
    if status == 'OK':
        for num in messages[0].split():
            _, msg_data = mail.fetch(num, '(RFC822)')
            msg = email.message_from_bytes(msg_data[0][1])

            subject, encoding = decode_header(msg['Subject'])[0]
            subject = subject.decode(encoding or "utf-8") if isinstance(subject, bytes) else subject
            subject = subject.split(': ')[-1]

            sender, encoding = decode_header(email.utils.parseaddr(msg['From'])[1])[0]
            sender = sender.decode(encoding or "utf-8") if isinstance(sender, bytes) else sender

            name, encoding = decode_header(email.utils.parseaddr(msg['From'])[0])[0]
            name = name.decode(encoding or "utf-8") if isinstance(name, bytes) else name

            if msg.is_multipart():
                msg = msg.get_payload(0)
            body = msg.get_payload(decode=True)
            body = body.decode(
                encoding or "utf-8") if isinstance(body, bytes) else body

            new_email = {
                'sender': sender,
                'name': name,
                'subject': subject,
                'body': len(body)
            }
            logger.info(f'Got new email:\n{new_email}')
            client = get_or_create_client(name, sender)
            ticket, is_created = get_or_create_ticket(subject, client)
            if is_created:
                logger.info(f'Created new ticket:\n{ticket.id, ticket.title, ticket.client}')
            mail_message = create_mail_message(ticket, client, body)
            logger.info(f'New mail message:\n{mail_message.id, mail_message.from_client, mail_message.ticket.title}')
