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
export async function criarVendedor(nome,email,senha,telefone,inscricao,endereco){
    const url = 'http://localhost:3000/vendedor/cadastrar-vendedor';
    let data;
    let vendedor = {
        nome: nome,
        email: email,
        senha: senha,
        inscricao: inscricao,
        endereco: endereco,
        telefone: telefone,
    }

    await axios.post(url,vendedor)
        .then(()    => data = 'cadastrado')
        .catch(()   => data = 'erro');
    
    return data;
}