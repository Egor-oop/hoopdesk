from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from apps.messagesapp.serializers import MailMessageSerializer
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
