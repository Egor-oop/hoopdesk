from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter

from .serializers import OrganizationSerializer, ClientSerializer, ClientSerializerOrganizationName
from .models import Organization, Client


class OrganizationViewSet(ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    filter_backends = (OrderingFilter,)


class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    filter_backends = (OrderingFilter,)

    def get_serializer_class(self):
        if 'orgname' in self.request.query_params:
            return ClientSerializerOrganizationName
        return super().get_serializer_class()
