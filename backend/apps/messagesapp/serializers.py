from rest_framework.serializers import ModelSerializer
from .models import MailMessage


class MailMessageSerializer(ModelSerializer):
    class Meta:
        model = MailMessage
        fields = '__all__'
