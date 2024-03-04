from rest_framework.serializers import ModelSerializer

from .models import Organization, Client


class OrganizationSerializer(ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'


class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class ClientSerializerOrganizationName(ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'full_name', 'email', 'updated_at')

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['organization_name'] = None
        if instance.organization:
            response['organization_name'] = OrganizationSerializer(
                instance.organization).data['name']
        return response
