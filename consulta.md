// Professores cadastrados
const proffys = [
    {
        name: "Pedro Leonardo",
        avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79005719_806099419860815_597872323915153408_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGuVmTyl5QaAt7_Ky-4BClhKCm0sF-5GPkoKbSwX7kY-YHE9qSlUuV6nPy_nWHhGC-TKK9wWqm0uNI5dU8yh6zD&_nc_ohc=1nMQKgEbUuAAX-QkYja&_nc_ht=scontent-gru2-2.xx&oh=6104681246573dbc3c80635106b3d05f&oe=5F4EF5DE",
        whatsapp: "99999999",
        bio: "Movido por curiosidade e com ambição de desvendar os mistérios do universo. <br>Compartilho meus conhecimentos com meus alunos para que juntos possamos explicar o inesplicavel <br> Mais de 10.000 alunos ja se juntaram a este proposito",
        subject: "Física",
        cost: "R$ 35,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/79005719_806099419860815_597872323915153408_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGuVmTyl5QaAt7_Ky-4BClhKCm0sF-5GPkoKbSwX7kY-YHE9qSlUuV6nPy_nWHhGC-TKK9wWqm0uNI5dU8yh6zD&_nc_ohc=1nMQKgEbUuAAX-QkYja&_nc_ht=scontent-gru2-2.xx&oh=6104681246573dbc3c80635106b3d05f&oe=5F4EF5DE",
        whatsapp: "12345678",
        bio: "Movido por curiosidade e com ambição de desvendar os mistérios do universo. <br>Compartilho meus conhecimentos com meus alunos para que juntos possamos explicar o inesplicavel <br> Mais de 10.000 alunos ja se juntaram a este proposito",
        subject: "Química",
        cost: 50.00,
        weekday: [4],
        time_from: [920],
        time_to: [1820]
    },
    {
        name: "Melissa Teixeira",
        avatar: "https://avatars2.githubusercontent.com/u/57147101?s=460&u=7e37b68c4ee429c0bff1dc4625cdb0eeb57584c3&v=4",
        whatsapp: "12345678",
        bio: "Movido por curiosidade e com ambição de desvendar os mistérios do universo. <br>Compartilho meus conhecimentos com meus alunos para que juntos possamos explicar o inesplicavel <br> Mais de 10.000 alunos ja se juntaram a este proposito",
        subject: "História",
        cost: 75.00,
        weekday: [7],
        time_from: [320],
        time_to: [820]
    }
];

DESAFIOS: 

    01 - Página de sucesso;

        -Monstrar página de sucesso do cadastro
        -Após dois segundos; redirecionar para o resultado de busca do proffy
            dicas:
                setTimeOut para aguardar os dois segundos
                location.href = ""

    02 - Correção de bugs;
        -Opção de excluir novos horários
            dicas:
                Não permitir que o usuário crie um novo horário caso o ultimo horário criado não tenha sido preenchido
                Função para deletar um horário