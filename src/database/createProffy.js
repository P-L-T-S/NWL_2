module.exports = async function(db, {proffyValue, classesValue, classScheduleValues}){
    // .run é usado para inserção de dados

    // inserir dados na tabela de proffys
    const insertedProffys = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);
    const proffyId = insertedProffys.lastID;

    // inserir dados na tabela de classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classesValue.subject}",
            "${classesValue.cost}",
            "${proffyId}"
        );
    `);
    
    const class_id = insertedClass.lastID;

    // inserir dados na tabela de classes_schedules
    // para cada item em classes_schedule retorne o banco de dados com o item adicionado
    const insertedAllClassesSchedules = classScheduleValues.map(element => {
        return db.run(`
            INSERT INTO class_schedules (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${element.weekday}",
                "${element.time_from}",
                "${element.time_to}"
            )
        `);
    });

    // aguarda a execução de todas as promessas
    await Promise.all(insertedAllClassesSchedules);

}