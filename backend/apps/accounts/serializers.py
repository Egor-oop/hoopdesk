from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'is_staff', 'is_superuser')
        extra_kwargs = {
            'username': {'required': False}
        }
        read_only_fields = ('username',)

    def update(self, instance, validated_data):
        if self.context['request'].user.is_staff:
            setattr(instance, 'is_active', validated_data.get('is_active', instance.is_active))
            setattr(instance, 'is_staff', validated_data.get('is_staff', instance.is_staff))
        else:
            setattr(instance, 'first_name', validated_data.get('first_name', instance.first_name))
            setattr(instance, 'last_name', validated_data.get('last_name', instance.last_name))
            setattr(instance, 'email', validated_data.get('email', instance.email))
        return instance


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email',
                  'first_name', 'last_name', 'is_active', 'is_staff')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'is_active': {'required': True},
            'is_staff': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_active=validated_data['is_active'],
            is_staff=validated_data['is_staff']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class RegisterSuperUserSerializer(UserRegisterSerializer):
    def create(self, validated_data):
        user = User.objects.create_superuser(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
