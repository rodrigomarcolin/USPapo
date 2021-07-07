from django.db import models

# Create your models here.
class Evento(models.Model):
    titulo = models.CharField(max_length=128)
    descricao = models.CharField(max_length = 512, blank=True)
    categoria = models.CharField(max_length = 64)
    criado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)
    data = models.DateTimeField()
    horario = models.DateTimeField()

    def __str__(self):
        return self.titulo
