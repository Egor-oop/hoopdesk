from rest_framework.viewsets import ModelViewSet

from .serializers import OrganizationSerializer, ClientSerializer
from .models import Organization, Client


class OrganizationViewSet(ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer


class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
