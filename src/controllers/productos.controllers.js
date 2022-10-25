import Producto from "../models/producto";

export const listarProducto = (req, res) => {
  res.send("hola desde el backend en la peticion get");
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

