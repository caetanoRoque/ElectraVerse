// Importando a database
const database = require("../database")

// Exportando a função
exports.cadastrarProduto = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = `INSERT INTO PRODUTO (NOME, PRECO, ESTOQUE, CATEGORIA, DESCRICAO, IMAGEM) VALUES ('${valores.nome}',${valores.preco},
    ${valores.estoque},'${valores.categoria}','${valores.descricao}','${valores.imagem}');`
    // Realizando a query passando de paramentros o select e valores
    return database.query(query)
  }

  // Exportando a função
exports.editarProduto = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = `UPDATE PRODUTO SET NOME='${valores.nome}', PRECO='${valores.preco}', ESTOQUE='${valores.estoque}', CATEGORIA='${valores.categoria}', 
   DESCRICAO='${valores.descricao}', IMAGEM='${valores.imagem}' WHERE ID_PRODUTO=${valores.id};`
    // Realizando a query passando de paramentros o select e valores
    return database.query(query)
  }

    // Exportando a função
exports.deletarProduto = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = `DELETE FROM PRODUTO WHERE ID_PRODUTO=${valores.id}`
    // Realizando a query passando de paramentros o select e valores
    return database.query(query)
  }

