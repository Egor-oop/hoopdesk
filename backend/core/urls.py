from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from apps.accounts.views import (
    RegisterSuperuserAPIView,
    UserViewSet,
    UserRegisterAPIView,
    IsSetupAPIView,
    MeAPIView
)
from apps.clients.views import (
    OrganizationViewSet,
    ClientViewSet
)
from apps.tickets.views import TicketViewSet
from apps.messagesapp.views import SendMessageAPIView

router = routers.DefaultRouter()

router.register('users', UserViewSet)
router.register('organizations', OrganizationViewSet)
router.register('clients', ClientViewSet)
router.register('tickets', TicketViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/is-setup/', IsSetupAPIView.as_view()),
    path('api/me/', MeAPIView.as_view()),
    path('api/register/', UserRegisterAPIView.as_view(), name='user_create'),
    path('api/registersuperuser/', RegisterSuperuserAPIView.as_view(), name='superuser_create'),
    path('api/send-message/', SendMessageAPIView.as_view()),

    # JWT
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
