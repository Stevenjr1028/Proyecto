const express = require ("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");

//Settings
app.set("json spaces", 2);



//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes 
app.use(require("./Routes/auth"));
app.use("/api/movies",require("./Routes/movies"));

// Escuchar en puerto 4000
app.listen(process.env.PORT, () =>{
    console.log("Servidor corriendo en puerto", process.env.PORT)
})