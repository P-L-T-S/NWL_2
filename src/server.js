// Configurações do server

// importa o express
const express = require("express");

// executa o express para ser utilizado
const server = express();

// importa as funções para renderizar as paginas
const {landingPage, studyPage, giveClassesPage, saveClasses} = require("./pages");

// importa o nunjucks
const nunjucks = require("nunjucks");

// configurar o nunjucks
nunjucks.configure("src/views",{
    express: server,
    noCache: true
});

// Habilita o uso do req.body
server.use(express.urlencoded({extended: true}));

// abillita a pasta publica para todas as rotas
// faz com que o server use todas as pastas da pasta publica 
server.use(express.static("public"));

// gerencia a rota raiz
server.get("/", landingPage);

// gerencia a rota study
server.get("/study", studyPage);

// configura a rota give-classes
server.get("/give-classes", giveClassesPage);

server.post("/save-classes", saveClasses);

// habilita a porta do servidor
server.listen(5500);