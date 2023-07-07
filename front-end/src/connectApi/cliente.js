import axios from 'axios'
import { dominio } from './apiDominio';

export async function getCliente(email,senha){
    const url = dominio+'cliente/logar-cliente';
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

export async function criarCliente(nome,email,senha,telefone,inscricao,endereco){
    const url = dominio+'cliente/cadastrar-cliente';
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