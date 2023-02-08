const sessionsData = require("../database/sessions.json");
const userData = require("../database/users.json");
const fs = require("fs");

function checkAccount(email, password){
    return userData.users.find(
        (dbUser) => dbUser.email === email && dbUser.password === password
    );
}

function checkSession(sessionId){
    return sessionsData.sessions.find(
        (dbSession) => dbSession.id === sessionId
    );
}

function checkIfSessionExist(idUsuario){
    return sessionsData.sessions.find(
        (dbSession) => dbSession.sessionId === idUsuario
    );
}

function addSession(id, sessionId){
    sessionsData.sessions.push({ id, sessionId });

    fs.writeFile(
        JSON.stringify(sessionsData, null, 2), "utf8",
        (err) =>{
            throw new Error("Error de escritura (fs)")
        }
    )

}

module.exports = {
    checkAccount,
    addSession,
    checkSession,
    checkIfSessionExist
};
