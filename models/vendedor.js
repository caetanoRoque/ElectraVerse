// Importando a database
const database = require("../database")

// Exportando a função
exports.cadastrarVendedor = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = `INSERT INTO VENDEDOR (NOME, SENHA, EMAIL, TELEFONE, INSCRICAO, ENDERECO) VALUES ('${valores.nome}','${valores.senha}','${valores.email}',
        '${valores.telefone}','${valores.inscricao}','${valores.endereco}');`
    // Realizando a query passando de paramentros o select e valores
    return database.query(query)
  }
