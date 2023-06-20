// Importando cerveja do models
const Vendedor = require('../models/vendedor')


exports.cadastrarVendedor = (req, res) => {
  // Pegando o valor passado pela url
  const valores = req.body

  // Chamando a função buscar_nome do models e passando valores de parâmetro
  Vendedor.cadastrarVendedor(valores)
  // Então se der certo exibir o resultado
    .then(() => {
      res.status(200).send({ mensagem: "Vendedor cadastrado com sucesso" })
    })
  // Se der errado diga qual erro que deu
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.logarVendedor = (req, res) => {

  const email = req.body.email;
  const senha = req.body.senha;

  Vendedor.logarVendedor(email,senha).then(
      (response) => res.status(200).send(response.rows),
      (error)    => res.status(404).send({'Erro':error}) 
  );
}
