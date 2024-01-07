from django.db import models
from django.contrib.auth.models import User

from apps.clients.models import Client


class Ticket(models.Model):
    title = models.CharField(max_length=998, null=False, blank=False)
    reliable = models.ForeignKey(User, on_delete=models.SET_NULL)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
