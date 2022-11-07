import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({

    nombreUsuario:{
        type: String, 
        required: true,
        unique: true,
        maxLength: 50,
        minLength: 10
    },
    contraseña: {
        type: String,
        required: true
        maxLength: 20,
        minLength: 8
    },
    email: {
        type: String,
        required: true
    }  
    
})

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;