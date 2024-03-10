from django.db import models
from django.contrib.auth.models import User

from apps.clients.models import Client


class Ticket(models.Model):
    PRIORITY_CHOICES = {
        (1, 'Высокий'),
        (2, 'Средний'),
        (3, 'Низкий'),
    }

    title = models.CharField(max_length=998, null=False, blank=False)
    reliable = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    priority = models.IntegerField(choices=PRIORITY_CHOICES, default=3,
                                   null=False, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True, null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.title)
