const Produto = require('../models/produto')


exports.cadastrarProduto = (req, res) => {
  // Pegando o valor passado pela url
  const valores = req.body

  // Chamando a função buscar_nome do models e passando valores de parâmetro
  Produto.cadastrarProduto(valores)
  // Então se der certo exibir o resultado
    .then(() => {
      res.status(200).send({ mensagem: "Produto cadastrado com sucesso" })
    })
  // Se der errado diga qual erro que deu
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.editarProduto = (req, res) => {
    // Pegando o valor passado pela url
    const valores = req.body
  
    // Chamando a função buscar_nome do models e passando valores de parâmetro
    Produto.editarProduto(valores)
    // Então se der certo exibir o resultado
      .then(() => {
        res.status(200).send({ mensagem: "Produto editado com sucesso" })
      })
    // Se der errado diga qual erro que deu
      .catch((erro) => {
        res.status(500).send({ erro: erro });
      })
  }

  exports.deletarProduto = (req, res) => {
    // Pegando o valor passado pela url
    const valores = req.body
  
    // Chamando a função buscar_nome do models e passando valores de parâmetro
    Produto.deletarProduto(valores)
    // Então se der certo exibir o resultado
      .then(() => {
        res.status(200).send({ mensagem: "Produto deletado com sucesso" })
      })
    // Se der errado diga qual erro que deu
      .catch((erro) => {
        res.status(500).send({ erro: erro });
      })
  }