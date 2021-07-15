from core.models import Evento, Profile
from rest_framework import serializers
from django.contrib.auth.models import User

class EventoSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Evento
        fields = ('id', 'titulo', 'descricao', 'categoria', 'criado_data', 'criado_hora', 'modificado_data', 'modificado_hora', 'datahora','owner', 'link')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    eventos = serializers.HyperlinkedRelatedField(many=True, view_name='evento-detail', read_only=True)
    password = serializers.CharField(write_only=True)
    perfil = serializers.HyperlinkedRelatedField(many=False, view_name='profile-detail', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'eventos', 'first_name', 'last_name', 'email', 'password', 'perfil']
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Profile
        fields = ['user', 'image', 'curso', 'campus', 'exp_academicas', 'int_academicos', 'email', 'owner']