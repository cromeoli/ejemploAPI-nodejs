const { v4: uuid } = require("uuid");

const checkUser = (req,res,next) => {

    const { cookies } = req;
    const { email, password } = req.body;

    if(!cookies.sessionId || !email || !password ){

        res.status(401).send({mensaje: "No autorizado"});
        
    };

    // Primera vez que usuario se loguea
    if(email && password){

        const credenciales = {
            email,
            password
        };

        const idUsuario = authorizationService.checkUser(credenciales);

        if(!idUsuario){
            res.status(401).send(
                { mensaje: "No autorizado" }
            );
        };

        const sessionId = uuid();
        authorizationServices.addSession(sessionId, idUsuario);


        next();
    };

};

module.exports = {
    checkUser
};