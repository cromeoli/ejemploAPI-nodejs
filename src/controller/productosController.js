const productosServices = require("../services/productosServices")

const getAllProducts = (req, res, next)=>{
    const allProducts = productosServices.getAllProducts();

    if(allProducts){
        res.send(allProducts)
    }else{
        res.status(404).end()
    }
    ;
  }

const postOneProduct = (req, res, next)=>{
    console.log(req)

    const {body} = req
    console.log(body)

    if(body.nombre === "" || body.categoria === ""){
        res.status(400).end
    }else{
        const ok = productosServices.createOneProduct(body);
        if(ok){
            res.status(200).sebd("Creado")
        }else{
            res.status(406)
        }
    }

    if(!body.nombre || !body.precio || !body.categoria){
      res.send("Nombre de producto incompleto")
    };

    res.end()
  }

 



const getOneProduct = (req, res, next)=>{
    const { prod } = req.params

    const oneProduct = productosServices.getOneProduct(prod)

    if(oneProduct){
        res.send(oneProduct)
    }else{
        res.status(404)
    }
  }
 
const updateOneProduct = (req, res, next)=>{
    res.send("Modifica un producto")
  }

const deleteOneProduct = (req, res, next)=>{
    res.send("Envia un producto")
  }

  module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
  }