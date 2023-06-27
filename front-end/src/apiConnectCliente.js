import axios from 'axios'

export async function logarCliente(email,senha){
    const url = 'http://localhost:3000/cliente/logar-cliente';
    let data;
    let cliente = {
        email: email,
        senha: senha
    }

    await axios.post(url,cliente)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function criarCliente(nome,email,senha,cpf,endereco,telefone){
    const url = 'http://localhost:3000/cliente/logar-cliente';
    let data;
    let cliente = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        endereco: endereco,
        telefone: telefone,
    }

    await axios.post(url,cliente)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}