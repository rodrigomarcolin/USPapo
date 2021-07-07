from core.models import Evento
from rest_framework import serializers

class EventoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Evento
        fields = ('id', 'titulo', 'descricao', 'categoria', 'criado', 'modificado', 'data', 'horario')
