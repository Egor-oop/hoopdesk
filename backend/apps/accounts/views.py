from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .serializers import UserRegisterSerializer


class UserRegisterAPIView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserRegisterSerializer
