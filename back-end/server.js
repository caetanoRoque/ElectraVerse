const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors');
const port = 3000

const clienteRoutes = require("./routes/cliente.js")
const vendedorRoutes = require("./routes/vendedor.js")
const produtoRoutes = require("./routes/produto.js")

const app = express()

app.use(cors());
app.use(bodyParser.json())

app.use("/cliente", clienteRoutes)
app.use("/vendedor", vendedorRoutes)
app.use("/produto", produtoRoutes)

app.listen(port,()=>{
    console.log("Servidor express rodando na porta 3000!")
})