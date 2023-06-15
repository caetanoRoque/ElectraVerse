const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
// Importando o arquivo cerveja.js da pasta routes 
const clienteRoutes = require("./routes/cliente.js")
const vendedorRoutes = require("./routes/vendedor.js")
const produtoRoutes = require("./routes/produto.js")

const app = express()
app.use(bodyParser.json())
// Definindo os endpoints
app.use("/cliente", clienteRoutes)
app.use("/vendedor", vendedorRoutes)
app.use("/produto", produtoRoutes)

// Informa que o servidor está ativo
app.listen(port,()=>{
    console.log("Servidor express rodando na porta 3000!")
})