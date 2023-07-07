import axios from 'axios'
import { dominio } from './apiDominio';

export async function getVendedor(email,senha){
    const url = dominio+'vendedor/logar-vendedor/';
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
    const url = dominio+'vendedor/cadastrar-vendedor';
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