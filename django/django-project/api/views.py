from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import EventoSerializer, ProfileSerializer, UserSerializer
from django.contrib.auth.models import User
from django.http import Http404
from core.models import Evento, Profile
from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@api_view(['GET'])
@csrf_exempt
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'eventos': reverse('eventos-list', request=request, format=format),
    })


@method_decorator(csrf_exempt, name='dispatch')
class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    #def perform_create(self, serializer):
    #    serializer.save(owner=self.request.user)


@method_decorator(csrf_exempt, name='dispatch')
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@method_decorator(csrf_exempt, name='dispatch')
class EventoList(generics.ListCreateAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    #def perform_create(self, serializer):
     #   serializer.save(owner=self.request.user)
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

@method_decorator(csrf_exempt, name='dispatch')
class EventoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    #def perform_create(self, serializer):
     #   serializer.save(owner=self.request.user)
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

@method_decorator(csrf_exempt, name='dispatch')
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@method_decorator(csrf_exempt, name='dispatch')
class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@method_decorator(csrf_exempt, name='dispatch')
class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

@method_decorator(csrf_exempt, name='dispatch')
class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

@method_decorator(csrf_exempt, name='dispatch')
class ProfileDetail(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer