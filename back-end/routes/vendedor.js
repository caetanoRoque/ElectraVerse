const express = require("express")
const router = express.Router()
const controllers = require("../controllers/vendedor.js")

router.post("/cadastrar-vendedor/", controllers.cadastrarVendedor)
router.post("/logar-vendedor/", controllers.logarVendedor)

module.exports = router