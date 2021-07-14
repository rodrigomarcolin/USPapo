# Generated by Django 3.2.5 on 2021-07-13 20:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evento',
            name='data',
        ),
        migrations.RemoveField(
            model_name='evento',
            name='hora',
        ),
        migrations.AddField(
            model_name='evento',
            name='datahora',
            field=models.CharField(default='banana', max_length=128),
        ),
        migrations.AddField(
            model_name='evento',
            name='latitude',
            field=models.CharField(blank=True, default='', max_length=512),
        ),
        migrations.AddField(
            model_name='evento',
            name='longitude',
            field=models.CharField(blank=True, default='', max_length=512),
        ),
        migrations.AlterField(
            model_name='evento',
            name='categoria',
            field=models.CharField(default='banana', max_length=128),
        ),
        migrations.AlterField(
            model_name='evento',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='eventos', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='padrão.png', upload_to='perfil_fotos')),
                ('curso', models.CharField(max_length=100, null=True)),
                ('campus', models.CharField(default='USP', max_length=100)),
                ('exp_academicas', models.CharField(max_length=512, null=True)),
                ('int_academicos', models.CharField(max_length=512, null=True)),
                ('email', models.CharField(max_length=256)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
