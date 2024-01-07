from rest_framework.viewsets import ModelViewSet

from .serializers import TicketSerializer
from .models import Ticket


class TicketViewSet(ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
