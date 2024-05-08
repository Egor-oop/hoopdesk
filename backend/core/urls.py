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
from apps.messagesapp.views import SendMessageAPIView, MailMessageViewSet
from apps.messagesapp.consumers import MailMessageConsumer

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Resolvo helpdesk",
      default_version='',
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()

router.register('users', UserViewSet)
router.register('organizations', OrganizationViewSet)
router.register('clients', ClientViewSet)
router.register('tickets', TicketViewSet)
router.register('mailmessages', MailMessageViewSet)

urlpatterns = [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
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
