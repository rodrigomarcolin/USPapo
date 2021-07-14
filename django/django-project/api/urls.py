from django.urls import include, path
from rest_framework import routers
from . import views
from django.conf.urls import url


router = routers.DefaultRouter()
router.register('events', views.EventoViewSet)
router.register('users', views.UserViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('apiroot/', views.api_root),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/eventos/', views.EventoList.as_view(), name='eventos-list'),
    path('api/eventos/<int:pk>/', views.EventoDetail.as_view(), name='eventos-detail'),
    path('api/users/', views.UserList.as_view(), name='user-list'),
    path('api/users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('api/users/create/', views.UserCreateAPIView.as_view(), name='create-user'),
    path('api/profiles/', views.ProfileList.as_view(), name='profile-list'),
    path('api/profiles/<int:pk>/', views.ProfileDetail.as_view(), name='profile-detail'),
    path('api/auth/', include('djoser.urls.authtoken')),
]
