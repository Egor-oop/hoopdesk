import logging
from email.header import decode_header
from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from core import celery_app
from .utils import (
    connect_to_email_server,
    create_new_messages
)

logger = logging.getLogger(__name__)


@shared_task
def check_emails():
    mail = connect_to_email_server(
        settings.EMAIL_HOST, settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)

    new_emails = create_new_messages(mail)

    mail.logout()


@shared_task
def send_email(to_email, subject, content):
    send_mail(
        subject,
        content,
        settings.EMAIL_HOST_USER,
        fail_silently=True,
        reply_to=[to_email],
    )
