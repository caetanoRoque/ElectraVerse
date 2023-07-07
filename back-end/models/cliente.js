const database = require("../database")

exports.cadastrarCliente = (valores) => {
    const query = `INSERT INTO CLIENTE (NOME, SENHA, EMAIL, TELEFONE, CPF, ENDERECO) VALUES ('${valores.nome}','${valores.senha}','${valores.email}',
        '${valores.telefone}','${valores.cpf}','${valores.endereco}');`
    return database.query(query)
  }

exports.logarCliente = (email,senha) => {
    const query = `SELECT * FROM CLIENTE WHERE EMAIL='${email}' AND SENHA='${senha}'`;
    return database.query(query);
}