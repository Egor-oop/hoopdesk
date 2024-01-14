import logging
import imaplib
import email
from email.header import decode_header
from celery import shared_task
from django.conf import settings
from core import celery_app

logger = logging.getLogger(__name__)



@shared_task
def check_emails():
    # Configure your email server details
    email_host = settings.EMAIL_HOST
    email_user = settings.EMAIL_HOST_USER
    email_password = settings.EMAIL_HOST_PASSWORD
    mailbox = 'INBOX'

    # Connect to the IMAP server
    mail = imaplib.IMAP4_SSL(email_host)
    mail.login(email_user, email_password)
    mail.select(mailbox)

    # Search for unseen emails
    status, messages = mail.search(None, 'UNSEEN')
    new_messages = []
    if status == 'OK':
        for num in messages[0].split():
            _, msg_data = mail.fetch(num, '(RFC822)')
            msg = email.message_from_bytes(msg_data[0][1])

            # Extract email information
            subject, encoding = decode_header(msg['Subject'])[0]
            sender = msg['From']
            body = msg.get_payload(decode=True)
            new_messages.append({
                'from': sender,
                'subject': subject,
                'body': body
            })
            logger.info(f'Got new email:\n{new_messages[-1]}')
    # Logout and close the connection
    mail.logout()
