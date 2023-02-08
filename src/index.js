const express = require("express");
const app = express();
const auth = require("./utils/authorization");

app.use(auth.checkUser)


const rutasV1 = require("./routes/v1/indexRoutes");
const rutasV2 = require("./routes/v2/indexRoutes");

const PORT = process.env.PORT || 3001;


app.use(express.json()) //Convierte el body a formato json, a un objeto. Middleware de express

app.use("/api/v1", rutasV1.router);
app.use("/api/v2", rutasV2.router);


app.listen(PORT, () => {
    console.log("\x1b[42m%s\x1b[0m",`Escuchando en puerto ${PORT}`);
});