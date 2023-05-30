const express = require ("express");

const Titulo = (req, res = express.request)=>{
    res.json({"Tittle": "L Messi"})
}

const Descripcion = (req, res=express.request)=>{
    res.json({"Descrip": "Mejor del Mundo"})
}

module.exports = {
    Titulo, Descripcion

}