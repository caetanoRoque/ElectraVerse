const pg = require("pg")
const env=require('dotenv')
env.config()
const database = new pg.Client(process.env.DT_BASE)

database.connect((erro)=>{
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL" , erro)
    }else{
        return console.log("Conectado ao ElephantSQL!")
    }
})

module.exports = database