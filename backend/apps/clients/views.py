from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import SAFE_METHODS

from .serializers import OrganizationSerializer, ClientSerializer, ClientSerializerRead
from .models import Organization, Client


class OrganizationViewSet(ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    pagination_class = PageNumberPagination
    filter_backends = (OrderingFilter,)

    def paginate_queryset(self, queryset):
        if 'nopage' in self.request.query_params:
            return None
        return super().paginate_queryset(queryset)


class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    pagination_class = PageNumberPagination
    filter_backends = (OrderingFilter,)

    def get_serializer_class(self):
        if self.request.method in SAFE_METHODS:
            return ClientSerializerRead
        return super().get_serializer_class()
