import axios from "axios";
import { dominio } from './apiDominio';

export async function getProdutos(){
    const url = dominio+'produto/pegar-produtos';
    let data;

    await axios.get(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function postProduto(produto){
    const url = dominio+'produto/cadastrar-produto';
    let data;

    await axios.post(url,produto)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function putProduto(produto){
    const url = dominio+'produto/editar-produto';
    let data;

    console.log(produto)

    await axios.put(url,produto)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function deleteProduto(id){
    const url = dominio+'produto/deletar-produto/'+id;
    let data;

    await axios.delete(url)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;

}