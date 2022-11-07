import { Router } from "express";
import { check } from "express-validator";
import { listarUsuarios, crearUsuario, obtenerUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router
.route("/usuarios")
.get(listarUsuarios)
.post(
    [check("nombreUsuario", "El nombre del usuario es obligatorio")
    .notEmpty()
    .isLength({min:10, max:50})
    .withMessage("El pusuario debe tener entre 10 y 50 caracteres"),
    check("email", "El email es obligatorio")
    .notEmpty()
    check("contraseña", "La contraseña es obligatoria")
    .notEmpty()
    .isLength({min:8, max:20})
    .withMessage("La contraseña debe tener entre 8 y 20 caracteres"),
  ],
    crearUsuario
  );
  router
  .route("/usuarios/:id")
  .get(obtenerUsuario)

