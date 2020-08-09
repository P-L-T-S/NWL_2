// importa o banco de dados do arquivo db
const database = require("./db");
// importa a função createProffy para ser executada
const createProffy = require("./createProffy");
// recebe como parametro o mesmo banco de dados aberto no arquivo db
database.then(async (db) => {
    // inserir dados
    let proffyValue = {
        name: "Pedro Leonardo",
        avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79005719_806099419860815_597872323915153408_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGuVmTyl5QaAt7_Ky-4BClhKCm0sF-5GPkoKbSwX7kY-YHE9qSlUuV6nPy_nWHhGC-TKK9wWqm0uNI5dU8yh6zD&_nc_ohc=1nMQKgEbUuAAX-QkYja&_nc_ht=scontent-gru2-2.xx&oh=6104681246573dbc3c80635106b3d05f&oe=5F4EF5DE",
        whatsapp: "99999999",
        bio: "Movido por curiosidade e com ambição de desvendar os mistérios do universo. <br>Compartilho meus conhecimentos com meus alunos para que juntos possamos explicar o inesplicavel <br> Mais de 10.000 alunos ja se juntaram a este proposito",
    };
    let classesValue = {
        subject: 7,
        cost: "R$ 35,00",
        // proffy id vira pelo banco de dados
    };
    let classScheduleValues = [
        {
            // class id vira pelo banco de dados
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            // class id vira pelo banco de dados
            weekday: 5,
            time_from: 520,
            time_to: 1020
        }
    ];

    await createProffy(db, {proffyValue, classesValue, classScheduleValues});


    // consultar dados

    // todos os proffys
    const selectProffys = await db.all("SELECT * FROM proffys");

    // procurar apenas um professor
    // e retornar as aulas dele
    const proffysAndClasses = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);


    // procura entre o time_from(inicio) e o time_to(fim)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedules.*
        FROM class_schedules
        WHERE class_schedules.class_id = 1
        AND class_schedules.weekday = 0
        AND class_schedules.time_from <= 720
        AND class_schedules.time_to > 720
    `);
})