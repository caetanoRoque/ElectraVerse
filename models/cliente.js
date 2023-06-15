// Importando a database
const database = require("../database")

// Exportando a função
exports.cadastrarCliente = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = `INSERT INTO CLIENTE (NOME, SENHA, EMAIL, TELEFONE, CPF, ENDERECO) VALUES ('${valores.nome}','${valores.senha}','${valores.email}',
        '${valores.telefone}','${valores.cpf}','${valores.endereco}');`
    // Realizando a query passando de paramentros o select e valores
    return database.query(query)
  }

  // const query = `INSERT INTO CLIENTE (NOME, SENHA, EMAIL, TELEFONE, CPF, ENDERECO) VALUES (${valores.nome},${valores.senha},${valores.email},
  //   ${valores.telefone},${valores.cpf},${valores.endereco});`