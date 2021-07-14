from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from .models import Profile, Evento

def cadastro(request):
    if request.method == 'GET':
        return render(request, 'core/cadastro.html', {'form':UserCreationForm()})
    else:
        email = request.POST['username'].strip().lower()         
        # se preenchido corretamente, criar novo usuário
        if (request.POST['password1'] == request.POST['password2'] and 'usp.br' in email):
            try:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('inicio')
            except IntegrityError:
                 return render(request, 'core/cadastro.html', {'form':UserCreationForm(), 'erro':'Esse email já pertence a um usuário'})
        else:
            # enviar mensagem de erro
            if 'usp.br' not in email:
                return render(request, 'core/cadastro.html', {'form':UserCreationForm(), 'erro':'Cadastre-se com e-mail USP'})
            else:
                return render(request, 'core/cadastro.html', {'form':UserCreationForm(), 'erro':'As senhas são incompatíveis'})

def entrar(request):
    if request.method == 'GET':
        return render(request, 'core/entrar.html', {'form':AuthenticationForm()})
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'core/entrar.html', {'form':AuthenticationForm(), 'erro':'Usuário não encontrado'})
        else:
            login(request, user)
            return redirect('inicio')


def sair(request):
    if request.method == 'POST':
        logout(request)
        return redirect('inicio')

def inicio(request):
    eventos = Evento.objects.all()
    return render(request, 'core/inicio.html', {"eventos":eventos})

def perfil(request):
    atributos = Profile.objects.all()
    return render(request, 'core/perfil.html')