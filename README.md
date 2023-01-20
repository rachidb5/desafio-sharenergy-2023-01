# Sharenergy-teste

Bem vindo ao meu teste tecnico para a seleção de desenvolvedor fullstack. A seguir, as orientações para a execução do projeto localmente.

Primeiro, vamos baixar o projeto. Execute o comando abaixo na pasta onde você deseja fazer o download.

```
https://github.com/rachidb5/desafio-sharenergy-2023-01/tree/roberto-jordan-rachid-ferreira-bastos
```

## Frontend

Primeiro entraremos na subpasta onde fica o frontend
```bash
cd sharenergy-front
```

Depois, instalamos as dependencias

```bash
npm i
```

Executando o frontend
```bash
npm start
```

*O frontend funciona sem o backend rodar localmente. Isso por que o endpoint utilizado está em um servidor online. 

## Backend

Primeiro entraremos na subpasta onde fica o backend
```bash
cd back-end
```

no arquivo ```index.js```, substitui-se a variavel connectionString pela string de conexão ao seu banco

Depois, instalamos as dependencias

```bash
npm i
```
Executando o backend
```bash
npm run dev
```

Executando os testes
```bash
npm test
```

## Deploy

O backend pode ser acessado no link [BACK](https://sharenergy-back.fly.dev/docs)

## Documentação

O swagger pode ser acessado no link [Documentação](https://sharenergy-back.fly.dev/docs)


