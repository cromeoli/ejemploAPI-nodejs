const usuariosModelo = require("../database/usuariosModelo")


function verifyAccount(credenciales){
    const verfiedUser = usuariosModelo.checkAccount(credenciales.email, credenciales. password)

    if(!verfiedUser){ return false }
    else{
        return verfiedUser.id
    }

}

function addSession (idUsuario, sessionId) {
    if(!usuariosModelo.checkSession(sessionId)){
        usuariosModelo.addSession(idUsuario, sessionId)
    }

}

module.exports = {
    verifyAccount,
    addSession
}