const { v4: uuid } = require("uuid");
const authorizationServices = require("../services/authorizationService")

function checkUser (req, res, next){


    const { cookies } = req;
    const { email, password } = req.body;

    console.log( email, password)

    if(!cookies.sessionId && !email && !password ){

        res.status(401).send({
            mensaje: "Petición sin datos suficientes"
        });

    }

    // Primera vez que usuario se loguea
    if(email && password){

        const credenciales = {
            email,
            password
        };

    const idUsuario = authorizationServices.verifyAccount(credenciales);

    if(!idUsuario){
        res.status(401).send(
            { mensaje: "No autorizado" }
        );
    }

    const sessionId = uuid();
    authorizationServices.addSession(sessionId, idUsuario);

    next();
    }

}

module.exports = {
    checkUser
};