// importa o banco de dados SQlite
const database = require("sqlite-async");

// recebe como parametro o banco de dados criado
function create(db){
    // cria a tabela no banco de dados recebido como parametro se não existir
    // .exec é usado para criação de tabelas
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedules (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `);
};

// Abre o banco de dados na pasta desejada
module.exports = database.open(__dirname + "/database.sqlite")
// executa a função de forma assincrona
// Após abrir o Banco de dados executa a função
.then(create);