import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProducto,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

// instansear el router
const router = Router();

// app.get("/prueba", (req, res)=>{
//     res.send("hola desde el backend en la peticion get")
// })

router
  .route("/productos")
  .get(listarProducto)
  // validar antes de hacer la funcion
  .post(
    [check("nombreProducto", "El nombre del producto es obligatorio")
    .notEmpty()
    .isLength({min:2, max:50})
    .withMessage("El producto debe tener entre 2 y 50 caracteres"),
    check("precio", "El precio del producto es obligatorio")
    .notEmpty()
    .isNumeric()
    .withMessage("El precio debe ser numerico")
    .custom((value)=>{
      if(value>=1 && value <=10000){
        return true
      }else{
        throw new Error("El precio debe estar entre 1 y 10000")
      }
    }),
    check("imagen")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    )
    .withMessage("Debe enviar una url valida"),
    check("categoria", "La categoria es obligatoria")
    .notEmpty()
    .isIn(["bebida-fria", "bebida-fria", "dulce", "salado"])
    .withMessage("La categoria debe ser valida")
  ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([check("nombreProducto", "El nombre del producto es obligatorio")
  .notEmpty()
  .isLength({min:2, max:50})
  .withMessage("El producto debe tener entre 2 y 50 caracteres"),
  check("precio", "El precio del producto es obligatorio")
  .notEmpty()
  .isNumeric()
  .withMessage("El precio debe ser numerico")
  .custom((value)=>{
    if(value>=1 && value <=10000){
      return true
    }else{
      throw new Error("El precio debe estar entre 1 y 10000")
    }
  }),
  check("imagen")
  .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
  )
  .withMessage("Debe enviar una url valida"),
  check("categoria", "La categoria es obligatoria")
  .notEmpty()
  .isIn(["bebida-fria", "bebida-fria", "dulce", "salado"])
  .withMessage("La categoria debe ser valida")], editarProducto)
  .delete(borrarProducto);

export default router;
