const Cliente = require('../models/cliente')

exports.cadastrarCliente = (req, res) => {
  const valores = req.body

  Cliente.cadastrarCliente(valores)
    .then(() => {
      res.status(200).send({ mensagem: "Cliente cadastrado com sucesso" })
    })
    .catch((erro) => {
      res.status(500).send( "Email já cadastrado." );
    })
}

exports.logarCliente = (req, res) => {

  const email = req.body.email;
  const senha = req.body.senha;

  Cliente.logarCliente(email,senha).then(
      (response) => res.status(200).send(response.rows),
      (error)    => res.status(404).send('erro') 
  );
}
