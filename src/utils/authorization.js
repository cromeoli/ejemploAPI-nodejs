const { v4: uuid } = require("uuid");
const authorizationServices = require("../services/authorizationService")

function checkUser (req, res, next){

    const { cookies } = req;
    const { email, password } = req.body;

    console.log( `Enviando datos de acceso al servidor. Email: ${email} Password: ${password}`);

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
    }else{
        console.log( `Usuario verificado, id asignada: ${idUsuario}`);
    }

    const sessionId = uuid();
        console.log( `Sesión añadida, id de session: ${sessionId}`)
    authorizationServices.addSession(sessionId, idUsuario);

    next();
    }

}

module.exports = {
    checkUser
};