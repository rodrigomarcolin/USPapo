Esta é a pasta do projeto DJANGO.
A pasta principal é a pasta 'backend'.
Nela, estão os arquivos principais do projeto (settings.py, urls.py, etc).
As outras pastas são de APLICATIVOS DJANGO.

Um projeto pode conter múltiplos aplicativos.
Um aplicativo pode estar presente em múltiplos projetos.

Cada diretório raiz de aplicativo possui alguns arquivos. Os mais importantes são:

	- models.py ### nele, ficam descritos os 'modelos' (Django abstrai a criação de tabelas em SQL - em vez de criá-las, definimos 'modelos' em código python, e o Django se encarrega em traduzi-los para SQL)

	- views.py ### apesar do nome sugerir coisas visuais, o views.py tem como principal função o routing - cada uma das URLs que o usuário acessa é conectada (pela urls.py) a alguma função de algum app. Essa função é declarada na views.py e executa a lógica necessária para montar a página e retorná-la.

!!!!!!!!!!!

DIRETÓRIOS

!!!!!!!!!!!

backend/ ### é o diretório principal do projeto DJANGO.

core/ ### é o diretório de um aplicativo que é o coração do produto. Nele, são definidos os modelos de postagens.

api/ ### é o diretório do aplicativo que implementa a API.
