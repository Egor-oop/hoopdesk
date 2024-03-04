from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=256, null=False, blank=False)
    website = models.CharField(max_length=128, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Client(models.Model):
    full_name = models.CharField(max_length=128, null=True, blank=True)
    email = models.EmailField(null=False, blank=False)
    organization = models.ForeignKey(Organization, on_delete=models.SET_NULL,
                                     null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
