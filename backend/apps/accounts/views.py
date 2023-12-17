from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, mixins, viewsets

from django.contrib.auth.models import User

from .serializers import UserRegisterSerializer, UserSerializer
from .permissions import IsCurrentUserOrReadOnly


class AccountViewSet(mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsCurrentUserOrReadOnly,)


class MeAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserRegisterAPIView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserRegisterSerializer


class IsSetupAPIView(APIView):
    def get(self, request, format=None):
        is_setup = not bool(User.objects.count())
        return Response({'is_setup': is_setup}, status=status.HTTP_200_OK)
