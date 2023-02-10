const datos = require("./datos.json")
const sessionsData = require("./sessions.json");
const fs = require("fs");

const getAllProducts = () => {
    return datos.productos
}

const postOneProduct = (productoFromServices) => {
    console.log(`${productoFromServices} de productosModelos`);
    if (datos["productos"][productoFromServices.nombre.replace(/\s+/g, "").toLowerCase()]){
        return 0;
    }

    datos.productos[productoFromServices.nombre.replace(/\s+/g, "").toLowerCase()] = productoFromServices

    fs.writeFileSync(
        "./src/database/datos.json",
        JSON.stringify(datos, null, 2), "utf8",
        (err) => {
            throw new Error("Error de escritura (fs) - postOneProduct")
        }
    )


    return productoFromServices
}

const getOneProduct = (productoFromServices) => {
    console.log(`${ productoFromServices } getOneProduct de modelo`);

    return datos.productos[productoFromServices]
}

const updateOneProduct = (productoModificado, nombre) => {

    datos.productos[nombre].precio = productoModificado.precio ? productoModificado.precio : datos.productos[nombre].precio;
    datos.productos[nombre].categoria = productoModificado.categoria ? productoModificado.categoria : datos.productos[nombre].categoria;
    datos.productos[nombre].fechaModificacion = productoModificado.fechaModificacion;

    fs.writeFileSync(
        "./src/database/datos.json",
        JSON.stringify(datos, null, 2), "utf8",
        (err) => {
            throw new Error("Error de actualizacion (fs) - updateOneProduct")
        }
    )

    return datos.productos[nombre];
}

const deleteOneProduct = (productoFromService) => {
    delete datos.productos[productoFromService];

    fs.writeFileSync(
        "./src/database/datos.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
}

module.exports = {
    getAllProducts,
    postOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}