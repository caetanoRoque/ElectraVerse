const express = require("express")
const router = express.Router()
// Importando o arquivo cerveja.js da pasta controllers 
const controllers = require("../controllers/vendedor.js")

// Definindo o endpoint de buscar pelo nome
router.post("/cadastrar-vendedor/", controllers.cadastrarVendedor)
router.post("/logar-vendedor/", controllers.logarVendedor)
// router.post('/logar-vendedor', controllers.logarVendedor);

// Exportando o router
module.exports = router