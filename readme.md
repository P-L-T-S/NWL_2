# Apresentação:

<h1>
    <img src="./public/images/proffy.png"/>
</h1>

## Índece:
- [Sobre](#-sobre)
- [Ferramentas utilizadas](#-ferramentas-utilizadas)
- [Desafios](#-desafios)

## 📌 Sobre:

A plataforma **Proffy** foi criada durante o evento da **Rocketseat**, a Next Level Week, ou como chamamos carinhosamente: A **NLW**.<br><br>
A intenção do evento é fazer um intensivão de uma semana onde temos o objetivo de criar uma aplicação do zero.
<br><br>
Mesclando a vontade de aprender, com a vontade de codar e a vontade de homenagear os professores do Brasil. Criamos uma plataforma de estudos online.
<br>
De forma simples por conta do tempo (uma semana não da pra fazer tanta coisa assim) criamos apenas a interface, a página inicial, o cadastro de professores e o filtro de aula no front-end. Enquanto no back-end configuramos as rotas de acessoe criamos o banco de dados.

<br>

___

<br>

## 💻 Técnologias utilizadas:
- **HTML;**
- **CSS;**
- **Javascript;**
- **NodeJS;**
- **Nunjucks;**
- **Express;**
- **SQLite;**
- **Nodemon**

---

## ⚙️ Desafios: 

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