const express = require("express");
const router = express.Router();
const productosRoutes = require("./productosRoutes")

//
router.get("/", (req, res, next)=>{
    res.send("Estas en v1/indexRoutes.js");
});

router.use("/productos", productosRoutes.router);

module.exports.router = router;