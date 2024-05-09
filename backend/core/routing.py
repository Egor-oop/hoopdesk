from django.urls import path
from apps.messagesapp.consumers import MailChatConsumer

websocket_urlpatterns = [
    path('ws/chat/<int:ticketId>/', MailChatConsumer.as_asgi()),
]
