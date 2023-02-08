const express = require("express");
const router = express.Router();


router.use("/", (req, res, next)=>{
    res.send("Hello World");
})

router.use("/product", (req, res, next)=>{
    res.send("Hola PRODUCTO");
})

module.exports.router = router