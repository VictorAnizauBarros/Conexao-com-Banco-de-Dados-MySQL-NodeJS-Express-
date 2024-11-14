

---

# Conexão com o Banco de Dados MySQL (Node.js + Express)

Este guia demonstra como configurar uma conexão com o banco de dados MySQL em um projeto Node.js usando o pacote `mysql2` e o framework Express.

## Passos para Configurar a Conexão com o Banco de Dados

### 1. Instalação do MySQL2

Para instalar o pacote `mysql2`, execute o comando no terminal:

```bash
npm install mysql2
```

### 2. Importar o MySQL2 no Projeto

No arquivo `index.js` do projeto, importe o módulo `mysql2`:

```javascript
const mysql = require('mysql2');
```

### 3. Criar a Conexão com o Banco de Dados

Configure a conexão com as informações do seu banco de dados:

```javascript
const db = mysql.createConnection({
  host: "localhost",     // Para um banco de dados rodando localmente
  user: "SEU_USUARIO",   // Substitua pelo seu usuário do banco
  password: "SUA_SENHA", // Substitua pela sua senha do banco
  database: "NOME_DO_SEU_BD" // Nome do seu banco de dados
});
```

### 4. Conectar ao Banco de Dados

Existem duas formas de estabelecer a conexão:

#### Primeira Forma (Callback)

```javascript
db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados com sucesso");
});
```

#### Segunda Forma (Async/Await)

```javascript
const connectToDatabase = async () => {
  try {
    await db.connect();
    console.log("Conectado ao banco com sucesso.");
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados:", error);
  }
};

connectToDatabase();
```

### 5. Adicionar o Objeto de Conexão como Middleware no Express

Para tornar a conexão com o banco de dados disponível em todas as rotas do projeto, adicione o middleware a seguir:

```javascript
const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.db = db; // Adiciona o objeto `db` ao objeto `req`, tornando-o acessível nas rotas
  next(); // Passa o controle para o próximo middleware ou rota
});
```



---

