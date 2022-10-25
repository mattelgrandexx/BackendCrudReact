import mongoose from "mongoose";

const url = "mongodb://localhost:27017/cafe-benito-santos";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("alakazam base de datos conectada")
})