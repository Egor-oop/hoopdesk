from django.db import models
from django.contrib.auth.models import User

from apps.clients.models import Client
from apps.tickets.models import Ticket


class MailMessage(models.Model):
    from_client = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True)
    from_employee = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    content = models.TextField(max_length=10000, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
