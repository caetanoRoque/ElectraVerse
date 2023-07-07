const Vendedor = require('../models/vendedor')


exports.cadastrarVendedor = (req, res) => {
  const valores = req.body

  Vendedor.cadastrarVendedor(valores)
    .then(() => {
      res.status(200).send({ mensagem: "Vendedor cadastrado com sucesso" })
    })
    .catch((erro) => {
      res.status(500).send("Email já cadastrado.");
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
