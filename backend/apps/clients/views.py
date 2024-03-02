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
        serializer = super().get_serializer_class()
        if self.request.query_params.get('orgname') == 'true':
            serializer = ClientSerializerOrganizationName
        return serializer
