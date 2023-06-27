const express = require("express")
const router = express.Router()
// Importando o arquivo cerveja.js da pasta controllers 
const controllers = require("../controllers/cliente.js")

// Definindo o endpoint de buscar pelo nome
router.post("/cadastrar-cliente/", controllers.cadastrarCliente)
router.get("/mostrar-clientes/", controllers.getClientes)
// router.get("/pegar-cliente/", controllers.pegarCliente)
router.post('/logar-cliente', controllers.logarCliente);

// Exportando o router
module.exports = router