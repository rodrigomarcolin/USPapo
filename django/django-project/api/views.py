from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EventoSerializer
from core.models import Evento

class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
