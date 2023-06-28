import axios from 'axios'

export async function logarCliente(email,senha){
    console.log(email)
    console.log(senha)
    const url = 'http://localhost:3000/cliente/logar-cliente';
    let data;
    let cliente = {
        email: email,
        senha: senha
    }

    await axios.post(url,cliente)
        .then(response => {
            console.log(cliente)
            data = response.data
        })
        .catch(error   => data = error);
    
    return data;
}

export async function criarCliente(nome,email,senha,telefone,inscricao,endereco){
    const url = 'http://localhost:3000/cliente/cadastrar-cliente';
    let data;
    let cliente = {
        nome: nome,
        email: email,
        senha: senha,
        inscricao: inscricao,
        endereco: endereco,
        telefone: telefone,
    }

    await axios.post(url,cliente)
        .then(()    => data = 'cadastrado')
        .catch(()   => data = 'erro');
    
    return data;
}