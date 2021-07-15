from django.db import models
from django.contrib.auth.models import User
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    image = models.ImageField(default='padrão.png', upload_to='perfil_fotos')
    curso = models.CharField(max_length=100, null=True)
    campus = models.CharField(max_length=100, default='USP')
    exp_academicas = models.CharField(max_length=512, null=True)
    int_academicos = models.CharField(max_length=512, null=True)
    email = models.CharField(max_length=256)
    def __str__(self):
     return f'{self.user.username} Profile' 

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)            
            img.thumbnail(output_size)
            img.save(self.image.path)

class Evento(models.Model):
    titulo = models.CharField(max_length=128)
    descricao = models.CharField(max_length = 512, blank=True)
    categoria = models.CharField(max_length=128, default='banana')
    criado_data = models.DateField(auto_now_add=True)
    criado_hora = models.TimeField(auto_now_add=True)
    modificado_data = models.DateField(auto_now=True)
    modificado_hora = models.TimeField(auto_now=True)
    latitude = models.FloatField(blank=True, default=0)
    longitude = models.FloatField(blank=True, default=0)
    datahora = models.CharField(max_length = 128, default='banana')
    owner = models.ForeignKey(User, related_name='eventos', on_delete=models.CASCADE, default=1)
    link = models.CharField(max_length=256, default="discord.gg/teste")
    def __str__(self):
        return self.titulo
