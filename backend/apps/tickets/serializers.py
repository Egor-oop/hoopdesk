from rest_framework.serializers import ModelSerializer

from apps.accounts.serializers import UserSerializer
from apps.clients.serializers import ClientSerializer
from .models import Ticket


class TicketSerializer(ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'


class TicketSerializerRead(ModelSerializer):
    reliable = UserSerializer(many=False, read_only=True)
    client = ClientSerializer(many=False, read_only=True)

    class Meta:
        model = Ticket
        fields = '__all__'