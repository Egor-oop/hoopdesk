from rest_framework.permissions import SAFE_METHODS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from apps.messagesapp.serializers import (
    MailMessageSerializer,
    MailMessageSerializerRead
)
from .models import MailMessage
from .tasks import send_email


class SendMessageAPIView(APIView):
    def post(self, request, format=None):
        serializer = MailMessageSerializer(data=request.data)
        if serializer.is_valid():
            model = serializer.save()
            send_email.delay(
                model.ticket.client.email,
                f'Re: {model.ticket.title}',
                model.content
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MailMessageViewSet(ModelViewSet):
    queryset = MailMessage.objects.all()
    serializer_class = MailMessageSerializer

    def get_queryset(self):
        ticket_id = self.request.query_params.get('ticket')
        if ticket_id:
            return MailMessage.objects.filter(ticket=ticket_id)
        return self.queryset

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return MailMessageSerializerRead
        return super().get_serializer_class()
