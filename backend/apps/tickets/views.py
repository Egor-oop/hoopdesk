from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import SAFE_METHODS

from .serializers import TicketSerializer, TicketSerializerRead
from .models import Ticket


class TicketViewSet(ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return TicketSerializerRead
        return super().get_serializer_class()

