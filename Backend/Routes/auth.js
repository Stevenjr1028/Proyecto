const { Router } = require("express");
const router = Router();

const {Titulo, Descripcion} = require("../Controllers/auth")

router.get("/test", Titulo)

router.post("/new", Descripcion)



module.exports = router;