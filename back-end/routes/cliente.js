const express = require("express")
const router = express.Router()

const controllers = require("../controllers/cliente.js")

router.post("/cadastrar-cliente/", controllers.cadastrarCliente)
router.post('/logar-cliente', controllers.logarCliente);

module.exports = router