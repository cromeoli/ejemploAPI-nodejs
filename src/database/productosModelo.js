const datos = require("./datos.json")

const getAllProducts = () => {
   return datos.productos //LLAMA AL MODELO, A LA FUNCION QUE TIENE TODOS LOS PRODUCTOS
}

const postOneProduct = () => {

}

const getOneProduct = () => {

}
 
const updateOneProduct = () => {

}

const deleteOneProduct = () => {

}

module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
  }