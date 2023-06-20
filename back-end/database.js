const pg = require("pg")
const env=require('dotenv')
env.config()
// Importando a URl do banco de dados
const database = new pg.Client(process.env.DT_BASE)

// Condicionando a conexão do banco de dados com a API
database.connect((erro)=>{
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL" , erro)
    }else{
        return console.log("Conectado ao ElephantSQL!")
    }
})

// Exportando o database
module.exports = database