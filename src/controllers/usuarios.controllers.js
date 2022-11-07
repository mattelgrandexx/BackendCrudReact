import { validationResult } from "express-validator";
import Usuario from "../models/usuario";

export const listarUsuarios =  async (req, res) => {
    try {
        const usuarios = await Usuario.find();
     res.status(200).json(usuarios);
    } catch (error) {
     console.log(error);
     res.status(404).json({
       mensaje: "error al buscar los usuarios"
     })
    }
   };

   export const crearUsuario =async (req, res) => {
    try {
      const errores = validationResult(req);
      if(!errores.isEmpty()){
       return res.status(400).json({
          errores: errores.array()
        })
      }
      const usuarioNuevo = new Usuario(req.body);
       await usuarioNuevo.save()
      res.status(201).json({
        mensaje: "El usuario fue creado correctamente"
      })
  } catch (error) {
      console.log(error)
      res.status(404).json({
        mensaje: "Error al intentar agregar un nuevo usuario"
      })
    }
  };
  
  export const obtenerUsuario = async (req, res) => {
    try {
     console.log(req.params.id)
    // buscar en la base de datos el producto que coincide con el parametro
      const  usuarioBuscado = await Usuario.findById(req.params.id);
    // responder al frontend
    res.status(200).json(usuarioBuscado);
    } catch (error) {
     console.log(error);
     // enviar una respuesta al frontend
     res.status(404).json({
       mensaje: "error al buscar un usuario"
     })
    }
   };
   
