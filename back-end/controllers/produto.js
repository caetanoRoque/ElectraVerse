const Produto = require('../models/produto')

exports.cadastrarProduto = (req, res) => {
  const valores = req.body

  Produto.cadastrarProduto(valores)
    .then(() => {
      res.status(200).send({ mensagem: "Produto cadastrado com sucesso" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.editarProduto = (req, res) => {
  const valores = req.body

  Produto.editarProduto(valores)
    .then(() => {
      res.status(200).send({ mensagem: "Produto editado com sucesso" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.deletarProduto = (req, res) => {
  const valores = req.body

  Produto.deletarProduto(valores)
    .then(() => {
      res.status(200).send({ mensagem: "Produto deletado com sucesso" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.pegarProduto = (req, res) => {

  Produto.pegarProduto()
    .then((resultado) => {
      res.status(200).send({ produtos: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}