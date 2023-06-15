const express = require("express")
const router = express.Router()
// Importando o arquivo cerveja.js da pasta controllers 
const controllers = require("../controllers/produto.js")

// Definindo o endpoint de buscar pelo nome
router.post("/cadastrar-produto/", controllers.cadastrarProduto)
router.put("/editar-produto/", controllers.editarProduto)
router.delete("/deletar-produto/", controllers.deletarProduto)

// Exportando o router
module.exports = router