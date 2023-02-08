const productosModelos = require("../database/productosModelo");
const {v4: uuid} = require("uuid");
const fs = require('fs')




const getAllProducts = () => {
    const allProducts = productosModelos.getAllProducts() //LLAMA AL MODELO, A LA FUNCION QUE TIENE TODOS LOS PRODUCTOS
    return allProducts;
}

const postOneProduct = () => {
    const productoNuevo = {
        ...body,
        id: uuid(), // id aleatorio con uuid
        fechaAlta: new Date().toLocaleDateString,
        fechaModificacion: new Date().toLocaleDateString,
    };

    const productoInsertado = productosModelo.insertOneProduct(productoNuevo);
    if(!productoInsertado){ 

      return false 
    }

    else{

        return productoInsertado

      }
    

};

const getOneProduct = () => {

};

const insertProduct = (producto) => {

  const nombre = producto.nombre;
  
  datos.productos[nombre] = producto;

  fs.writeFileSync(
    "./src/database/productos.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );

};
 
const updateOneProduct = () => {

}

const deleteOneProduct = () => {


}

  module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct,
    insertProduct
  }