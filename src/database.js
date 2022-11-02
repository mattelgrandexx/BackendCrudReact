import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/cafe-benito-santos"; //local
const url = "mongodb+srv://mattelgrandexx:matt12345@cluster0.s1wboe0.mongodb.net/cafe-benito-santos"; //produccion

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("base de datos conectada")
})