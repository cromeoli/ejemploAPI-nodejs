const express = require("express");
const router= express.Router();
const productosController = require("../../controller/productosController")

// localhost:3001/api/v1/productos
router.route("/")
        .get(productosController.getAllProducts)
        .post(productosController.postOneProduct);

router.route("/:producto")
        .get(productosController.getOneProduct)
        .put(productosController.updateOneProduct)
        .delete(productosController.deleteOneProduct);

module.exports.router = router;