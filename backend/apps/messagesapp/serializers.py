from rest_framework.serializers import ModelSerializer
from .models import MailMessage
from apps.tickets.serializers import TicketSerializerRead


class MailMessageSerializer(ModelSerializer):
    class Meta:
        model = MailMessage
        fields = '__all__'


class MailMessageSerializerRead(ModelSerializer):
    ticket = TicketSerializerRead(many=False, read_only=True)

    class Meta:
        model = MailMessage
        fields = '__all__'
