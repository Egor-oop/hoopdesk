from channels.generic.websocket import JsonWebsocketConsumer
from asgiref.sync import async_to_sync


class MailChatConsumer(JsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.ticket_id = None

    def connect(self):
        self.accept()
        self.ticket_id = self.scope['url_route']['kwargs']['ticketId']
        async_to_sync(self.channel_layer.group_add)(
            f'ticket_{self.ticket_id}', self.channel_name
        )
        self.send_json({
            'message': f'connection established {self.channel_name}'
        })

    def receive(self, text_data=None, bytes_data=None, **kwargs):
        self.send('yo')

    def disconnect(self, event):
        self.close()

    def new_message(self, event):
        message = event['message']
        self.send_json(message)
