// Importando cerveja do models
const Cliente = require('../models/cliente')


exports.cadastrarCliente = (req, res) => {
  // Pegando o valor passado pela url
  const valores = req.body

  // Chamando a função buscar_nome do models e passando valores de parâmetro
  Cliente.cadastrarCliente(valores)
  // Então se der certo exibir o resultado
    .then(() => {
      res.status(200).send({ mensagem: "Cliente cadastrado com sucesso" })
    })
  // Se der errado diga qual erro que deu
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
exports.getClientes = (req, res) => {

  Cliente.getClientes().then(
      (response) => res.status(200).send(response.rows),
      (error)    => res.status(404).send('erro') 
  );
}
