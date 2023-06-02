# puma-code-challenge

## Implementação

A seguir descrevo as tecnologias utilizadas para a implementação do desafio e alguns raciocínios por trás das decisões tomadas.

### Back-end
Feito utilizando o Express.Js, um famework para Node.Js, meu back-end utiliza a Classe `Profile` (em `backend/src/models/Profile.class.modeljs`), que é responsável por armazenar a array de Usuários Favoritados e a Estrutura do meu objeto, como uma espécie de bando de dados. O back-end gira em torno das rotas declaradas em `backend/src/routes/users.routes.js` e seus middlewares, utilizados para validação e tratamento de exceções. O back-end também é composto pela service e controller, que são responsáveis por tratar a lógica de negócio e a requisição, respectivamente.

Foram realizados testes unitários utilizando o Jest, que podem ser encontrados em `backend/tests/profile.test.js`. Não foi possível realizar os testes de integração para as rotas, pois não houve tempo. Além desses testes, implementei 2 testes de integridade de código, disponíveis no github actions, que podem ser encontrados em `.github/workflows/`.

A port, a quantidade maxima de usuários favoritados e a url da api do github são definidas no arquivo `/backend/src/config/envronment.js` e podem ser alteradas a qualquer momento.

### Front-end
Feito utilizando Angular, meu front-end consiste em 4 seções:
- Página principal: a página onde aparecem todas as opções
- Componentes: card que expõe as informações do usuário
- Models: funciona para tipar o objeto de perfil que é retornado pela API a partir do back-end
- Services: responsável por realizar as requisições para o back-end

## Como rodar o projeto

O primeiro passo é clonar o repositorio, utilizando o comando:

    git clone https://github.com/ArthurFerreiraRodrigues/puma-code-challenge

É importante ter o Node.Js instalado na máquina, para isso, basta seguir as instruções do site oficial: https://nodejs.org/en/download/

Após verificar se o Node está instalado, verifique se o npm está instalado, utilizando o comando:

    npm -v

Caso não esteja instalado, basta seguir as instruções do site oficial: https://www.npmjs.com/get-npm

Após isso, basta entrar na pasta do projeto e instalar as dependências, utilizando o comando:

- Para ao back-end utilize `yarn`.
- Para o front-end utilize `npm install`.

E o projeto está pronto para ser executado utilizando:


Backend

    yarn start


Front-end

    ng serve


## Para rodar os testes

No back-end, basta utilizar o comando:

    yarn test

No front-end, basta utilizar o comando `ng build` para validar se o projeto está sendo compilado sem erros. 