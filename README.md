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

Utilizei o NodeJS para construir a API da aplicação utilizando tambem biblioteca do EXPRESS.js e Mongoose. 

Versionei a rota utilizando /v1/ para uma melhor organização.

Estava para criar uma estrutura de teste utilizando o Mocha, Chai e Chai-Http mas infelizmente não tive tempo  para realizar.

Criei uma estrutura no DOCKER para utilizar o MONGO e o NODE em containers separados.

Caso queira criar um novo usuário utilize a rota http://localhost:3000/v1/users POST passando os parametros: name, mail, dueDate (padrao americano), value.
