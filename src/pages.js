// importa o banco de dados
const database = require("./database/db");

// importa as matéria e dias da semana
const {subjects, weekdays, convertHoursToMinute, getSubject} = require("./utils/format");

// funções do server

// Renderiza a pagina inicial
function landingPage(req, res){
    // sendFile é utilizado para o server enviar a pagina
    // dirname + "diretorio"

    // render é utilizado para o server enviar um arquivo nunjucks
    // com o nunjucks configurado só o nome do arquivo é necessário
    return res.render("index.html");
};
// Renderiza a pagina de filtrar aulas
async function studyPage(req, res){
    // tras as informações contidas no formulario de filtro
    const filters = req.query;



    // Se existir campo não preenchido exibe a pagina
    if(!filters.weekday || !filters.subject || !filters.time){

    // renderiza a pagina e exporta os seguintes arrays para a pagina utiliando o Nunjucks
    return res.render("study.html", { filters, subjects, weekdays});    
    
    }
    const hourToMinute = convertHoursToMinute(filters.time);

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedules.*
            FROM class_schedules
            WHERE class_schedules.class_id = classes.id
            AND class_schedules.weekday = ${filters.weekday}
            AND class_schedules.time_from <= ${hourToMinute}
            AND class_schedules.time_to > ${hourToMinute}
        )
        AND classes.subject = "${getSubject(filters.subject)}"
    `;

    try{
        const db = await database;
        const proffys = await db.all(query);

        /* proffys.map(item => {
            item.subject =  getSubject(item.subject);
        }); */
        return res.render("study.html", {proffys, filters, subjects, weekdays});    
    }catch(error){
        console.warn(error);
    }
};
// renderiza a pagina de formulario para ser professor
function giveClassesPage(req, res){
    return res.render("give-classes.html", {subjects, weekdays});
};
// metodo post para o envio do formulario no giveClasses
async function saveClasses(req, res){
    // Recebe os dados do formulario
    // recebe os dados do cadastro caso haja algum
    const data = req.body;
    // importa a função q cria proffys
    const createProffy = require("./database/createProffy");

    const proffyValue = {
        name: data.name,
        avatar: data.avatar,
        whatsapp: data.whatsapp,
        bio: data.bio
    };
    const classesValue = {
        subject: getSubject(data.subject),
        cost: data.cost
    };
    const classScheduleValues = data.weekday.map((item, index) => {
        return {
            weekday: item,
            time_from: convertHoursToMinute(data.time_from[index]),
            time_to: convertHoursToMinute(data.time_to[index]),
        }
    });

    try {
        const db = await database;
        // executa a função enviando os seguintes argumentos
        await createProffy(db , { proffyValue, classesValue, classScheduleValues });

        let queryString = "?subject=" + data.subject;
        queryString += "&weekday=" + data.weekday[0];
        queryString += "&time=" + data.time_from[0];

        return res.redirect("/study" + queryString);
    } catch (error) {
        console.warn(error);
    }
};
module.exports = {landingPage, studyPage, giveClassesPage, saveClasses}