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
    console.log(req.body)

    const {body} = req
    console.log(body)

    if(body.nombre === "" || body.categoria === ""){
        console.log("Nombre o categoria vacíos: productosController-21")
        res.status(400).end
    }else{
        const ok = productosServices.postOneProduct(body);
        if(ok){
            res.status(200).send(ok)
        }else{
            res.status(406).send("Producto ya existente")
        }
    }

    if(!body.nombre || !body.precio || !body.categoria){
      res.send("Nombre de producto incompleto")
    };

    res.end()
  }

 



const getOneProduct = (req, res, next)=>{

    console.log(req.params)
    const { producto } = req.params

    console.log(`${producto} getOneProduct de productosController`);

    const oneProduct = productosServices.getOneProduct(producto)

    if(oneProduct){
        res.send(oneProduct)
    }else{
        res.status(404)
    }
  }
 
const updateOneProduct = (req, res, next)=>{
    console.log(req.body)

    const { producto } = req.params
    const {body} = req
    console.log(body)

    if(body.nombre === "" && body.categoria === "" && body.precio === ""){
        console.log("Los datos para actualizar están vacíos: productosController")
        res.status(400).end
    }else{
        const ok = productosServices.updateOneProduct(body, producto);
        if(ok){
            res.status(200).send(ok)
        }else{
            res.status(406).send("Producto ya existente")
        }
    }

    if(!body.nombre || !body.precio || !body.categoria){
        res.send("Nombre de producto incompleto")
    };

    res.end()

  }

const deleteOneProduct = (req, res, next)=>{
    let { producto } = req.params;

    const deletedProduct = productosServices.deleteOneProduct(producto);

    if (!deletedProduct) {
        res.status(400).send({ mensaje: "Error al eliminar el producto" }).end();
    } else {
        res.send(deletedProduct).end();
    }
    next();
  }

  module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
  }