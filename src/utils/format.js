// Informações
// Matérias disponíveis
const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];
//  Dias da semana
const weekdays= [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

function getSubject(subject){
    return subjects[subject];
}

// Converte horas para minutos
function convertHoursToMinute(time){
    const [hour, minute] = time.split(":");
    return Number(hour * 60) + Number(minute);
};

module.exports = {subjects, weekdays, convertHoursToMinute, getSubject};