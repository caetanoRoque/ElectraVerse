const database = require("../database")

exports.cadastrarVendedor = (valores) => {
    const query = `INSERT INTO VENDEDOR (NOME, SENHA, EMAIL, TELEFONE, INSCRICAO, ENDERECO) VALUES ('${valores.nome}','${valores.senha}','${valores.email}',
        '${valores.telefone}','${valores.inscricao}','${valores.endereco}');`
    return database.query(query)
}

exports.logarVendedor = (email,senha) => {
    const query = `SELECT * FROM VENDEDOR WHERE EMAIL='${email}' AND SENHA='${senha}'`;
    return database.query(query);
}