import { Router } from "express";
import {
  crearProducto,
  listarProducto,
} from "../controllers/productos.controllers";

// instansear el router
const router = Router();

// app.get("/prueba", (req, res)=>{
//     res.send("hola desde el backend en la peticion get")
// })

router.route("/productos").get(listarProducto).post(crearProducto);

export default router;
