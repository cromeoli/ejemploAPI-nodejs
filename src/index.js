const express = require("express");
const auth = require("./utils/authorization");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;

//Convierte el body a formato json, a un objeto. Middleware de express
app.use(express.json());
app.use(cookieParser());
//app.use(auth.checkUser);


const rutasV1 = require("./routes/v1/indexRoutes");
const rutasV2 = require("./routes/v2/indexRoutes");

app.use("/api/v1", rutasV1.router);
app.use("/api/v2", rutasV2.router);


app.listen(PORT, () => {
    console.log("\x1b[42m%s\x1b[0m",`Escuchando en puerto ${PORT}`);
});