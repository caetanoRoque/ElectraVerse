const express = require("express")
const router = express.Router()
const controllers = require("../controllers/produto.js")

router.post("/cadastrar-produto/", controllers.cadastrarProduto)
router.put("/editar-produto/", controllers.editarProduto)
router.delete("/deletar-produto/:id", controllers.deletarProduto)
router.get("/pegar-produtos/", controllers.pegarProduto)

module.exports = router