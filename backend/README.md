# Code challenge PUMA

## Instruções básicas

Você foi encarregado de construir um aplicativo web para a criação de uma lista
de usuários favoritos do GitHub.

Para isso, deverá ser utilizada a API oficial do GitHub (https://api.github.com)
cuja documentação se encontra em https://docs.github.com/pt/rest

A aplicação consistirá em um **backend**, que será responsável pelas requisições à
API do GitHub e persistência dos dados em memória, e um **frontend** para exibição e 
gerenciamento da lista de favoritos.

A linguagem de programação deverá ser Javascript. Utilize Node.js e um
framework como Express.js ou Fastify para o backend, e React, Angular ou Vue.js
para o frontend.

## Backend

O backend de sua aplicação consistirá nas seguintes rotas:

```
POST /users: adicionar um usuário à lista de favoritos (username, nome, avatar e url)

GET /users: listagem dos usuários favoritos salvos em memória

DELETE /users/{username}: remover um usuário da lista de favoritos

PATCH /users/{username}/toggle-star: marca/desmarca um usuário da lista de favoritos com 
uma estrela - essa rota deverá funcionar como uma chave (toggle), alternando entre 
liga/desliga a estrela do usuário

```

Regras de negócio:

- O utilizador poderá adicionar o máximo de 5 usuários favoritos;
- O utilizador não poderá adicionar um usuário que já foi adicionado na lista;
- Somente 1 usuário pode ser marcado com uma estrela. Se o utilizador tentar
  marcar um segundo usuário com uma estrela, o usuário anteriormente marcado
  deixará de ter a estrela;
- O utilizador poderá ordenar a lista de usuários em ordem alfabética de nome.

.
.
Fonte: [github.com/jsfelix/](https://github.com/jsfelix/puma-code-challenge/blob/main/README.md)
