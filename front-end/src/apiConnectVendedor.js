import axios from 'axios'

export async function logarVendedor(email,senha){
    const url = 'http://localhost:3000/vendedor/logar-vendedor/';
    let data;
    let vendedor = {
        email: email,
        senha: senha
    }

    await axios.post(url,vendedor)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function criarVendedor(nome,email,senha){
    const url = 'http://localhost:3000/vendedor/cadastrar-vendedor/';
    let data;
    let vendedor = {
        nome: nome,
        email: email,
        senha: senha
    }

    await axios.post(url,vendedor)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}