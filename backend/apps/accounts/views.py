from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.contrib.auth.models import User

from .serializers import UserRegisterSerializer


class UserRegisterAPIView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserRegisterSerializer


class IsSetupAPIView(APIView):
    def get(self, request, format=None):
        is_setup = not bool(User.objects.count())
        return Response({'is_setup': is_setup}, status=status.HTTP_200_OK)
