// Importando os módulos necessários
const express = require("express");
const mysql = require("mysql2"); //módulo mysql2 para conexão com o banco de dados MySQL

// Cria uma instância do Express para gerenciar rotas e middlewares
const app = express; 

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost", // Define o host do banco de dados (localhost se estiver rodando localmente)
  user: "SEU_USUARIO", // Substitua pelo nome de usuário do banco de dados
  password: "SUA_SENHA", // Substitua pela senha do banco de dados
  database: "NOME_DO_SEU_BD", // Nome do banco de dados ao qual vai se conectar
});

// Função assíncrona para conectar-se ao banco de dados
const connectToDatabase = async () => {
  try {
    await db.connect(); // Tenta estabelecer uma conexão com o banco de dados
    console.log("Conectado ao banco com sucesso."); // Mensagem de sucesso em caso de conexão bem-sucedida
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados:", error); // Exibe uma mensagem de erro em caso de falha na conexão
  }
};

connectToDatabase(); 

// Middleware para adicionar o objeto de conexão do banco de dados ao objeto de solicitação (req)
app.use((req, res, next) => {
    req.db = db; // Adiciona a conexão `db` ao objeto `req`, tornando-o acessível em rotas futuras
    next(); // Passa o controle para o próximo middleware
});
