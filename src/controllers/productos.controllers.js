import Producto from "../models/producto";

export const listarProducto = async (req, res) => {
 try {
  // buscar los productos
     const productos = await Producto.find();
  // responder al frontend con el arreglo de objetos
  res.status(200).json(productos);
 } catch (error) {
  console.log(error);
  // enviar una respuesta al frontend
  res.status(404).json({
    mensaje: "error al buscar los productos"
  })
 }
};

export const crearProducto =async (req, res) => {
  try {
    // console.log(req.body)
    // validar los datos del objeto
    // guardar el obj en la base de datos
    const productoNuevo = new Producto(req.body);
    // guardar el objeto nuevo en la base de datos
     await productoNuevo.save()
    res.status(201).json({
      mensaje: "El producto fue creado correctamente"
    })

    
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: "Error al intentar agregar un nuevo producto"
    })
  }
};

