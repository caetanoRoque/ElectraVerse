const database = require("../database")

exports.cadastrarProduto = (valores) => {
  const query = `INSERT INTO PRODUTO (NOME, PRECO, ESTOQUE, CATEGORIA, DESCRICAO, IMAGEM) VALUES ('${valores.nome}',${valores.preco},
    ${valores.estoque},'${valores.categoria}','${valores.descricao}','${valores.imagem}');`
  return database.query(query)
}

exports.editarProduto = (valores) => {
  const query = `UPDATE PRODUTO SET NOME='${valores.nome}', PRECO='${valores.preco}', ESTOQUE='${valores.estoque}', CATEGORIA='${valores.categoria}', 
  DESCRICAO='${valores.descricao}', IMAGEM='${valores.imagem}' WHERE ID_PRODUTO=${valores.id_produto};`
  return database.query(query)
}

exports.deletarProduto = (id) => {
  const query = `DELETE FROM PRODUTO WHERE ID_PRODUTO=${id}`
  return database.query(query)
}

exports.pegarProduto = () => {
  const query = "SELECT * FROM produto;"
  return database.query(query)
}