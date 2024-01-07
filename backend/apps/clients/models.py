from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=256, null=False, blank=False)
    website = models.CharField(max_length=128, null=True, blank=True)
    email = models.EmailField(null=False, blank=False)


class Client(models.Model):
    full_name = models.CharField(max_length=128, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
