# All features for management your enviroment.

## Mount docker container

### 1. Copy .env.example and rename to .env

```console
cp .env.example .env
```

### 2. Build with docker compose

```console
docker-compose build
```

### 3. Up your containers.

```console
docker-compose up
```

### 4. Check if is on.

[http://localhost:3000](http://localhost:3000)

### 5. For seed, execute this command in bash container (This command drop your database and seed):

```console
docker-compose exec server npm run seed
```

# Informações sobre o projeto.

## Arquitetura

Utilizei o NodeJS para fazer a API da aplicação utilizei tambem biblioteca do EXPRESS.js e Mongoose. Utilizei essass duas bibliotecas pois elas facilitam bastante o desenvolvimento tornando agil e legivel.

Versionei a rota utilizando /v1/ para uma melhor organização.

Ia criar uma estrutura de teste utilizando o Mocha + Chai mas infelizmente não tive tempo suficiente para realizar.

Criei uma estrutura no DOCKER para comportar o MONGO e o NODE em containers separados.

Criei um mini CD + CI para mostrar que conheço do assunto e estou apto para realizar essa função caso haja necessidade. Faltou algumas coisas nele como verificação de testes e algumas outras coisas. O CD está enviando para o heroku com esse endereço - https://totvs.herokuapp.com/

Fiz algumas seeds para facilitar o teste.

Caso queira criar um novo usuário utilize a rota http://localhost:3000/v1/users POST passando os parametros - name, mail, dueDate(padrao americano), value.
