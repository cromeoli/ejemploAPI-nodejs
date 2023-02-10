const productosModelo = require("../database/productosModelo");
const {v4: uuid} = require("uuid");
const fs = require('fs')


const getAllProducts = () => {
    const allProducts = productosModelo.getAllProducts() //LLAMA AL MODELO, A LA FUNCION QUE TIENE TODOS LOS PRODUCTOS
    return allProducts;
}

const postOneProduct = (productoFromController) => {
    const productoNuevo = {
        ...productoFromController,
        id: uuid(), // id aleatorio con uuid
        fechaAlta: new Date().toLocaleDateString(),
        fechaModificacion: new Date().toLocaleDateString(),
    };

    console.log(productoNuevo);

    const productoInsertado = productosModelo.postOneProduct(productoNuevo);
    if ( !productoInsertado ) {
        console.log("Error al insertar producto - productoServices")
        return false
    } else {
        return productoInsertado
    }

};

const getOneProduct = (productoFromController) => {
    console.log(`${productoFromController} getOneProduct de Services`);
    return productosModelo.getOneProduct(productoFromController)

};

const updateOneProduct = (datosProducto,nombreProducto) => {

    const productoModificado = {
        ...datosProducto,
        fechaModificacion: new Date().toLocaleDateString()
    };

    const productoInsertado = productosModelo.updateOneProduct(productoModificado, nombreProducto);
    if ( !productoInsertado ) {
        console.log("Error al insertar producto - productoServices")
        return false
    } else {
        return productoInsertado
    }

}

const deleteOneProduct = (productoFromController) => {
    const producto = productosModelo.getOneProduct(productoFromController);
    if (!producto) {
        return false;
    }

    productosModelo.deleteOneProduct(productoFromController);

    if(!productosModelo.getOneProduct(productoFromController)){
        return producto
    } else {
        return false
    }

}

module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}