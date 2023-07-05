import axios from "axios";

export async function getProdutos(){
    const url = 'http://localhost:3000/produto/pegar-produto';
    let data;

    await axios.get(url)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function postProduto(produto){
    const url = 'http://localhost:3000/produto/cadastrar-produto';
    let data;

    await axios.post(url,produto)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function putProduto(produto){
    const url = 'http://localhost:3000/produto/editar-produto';
    let data;

    console.log(produto)

    await axios.put(url,produto)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function deleteProduto(id){
    const url = 'http://localhost:3000/produto/deletar-produto'+id;
    let data;

    await axios.delete(url)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}