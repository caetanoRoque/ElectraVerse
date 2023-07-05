import './tela-edicao-produto.css'
import { useState , useEffect} from 'react'
import { criarCliente } from '../../apiConnectCliente'
import { criarVendedor } from '../../apiConnectVendedor'
import { getProdutos, putProduto} from "../../apiConnectProduto"

export default function TelaEdicaoProduto({setVendedorLogado}){
    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [estoque, setEstoque] = useState()
    const [categoria, setCategoria] = useState()
    const [descricao, setDescricao] = useState()
    const [imagem, setImagem] = useState()
    const [produtos, setProdutos] = useState([])
    const [id_produto, setIdProduto] = useState("")
    
    useEffect(()=>{
        getProdutos().then(produto=>{
            setProdutos(produto.produtos);
        })
    },[])

    const handleEditar = (event) => {
        event.preventDefault();
        
        putProduto({id_produto,preco,nome,estoque,categoria,descricao,imagem}).then(
            (resposta)=>{
                if(resposta != 'Produto cadastrado com sucesso')
                    alert('Campos inválidos');
            }
        )
    }

    const mapProdutos = ()=>{
        let options = produtos?.map((produto,key)=>{
            return (
                <option key={key} value={produto.id_produto}>{produto.nome}</option>
            )
        })
        return options;
    }
    
    return(
        <section className='tela-cadastro'>
        <div className="box">
            <form onSubmit={()=>handleEditar(event)}>
                <h2>Editar Produto</h2>
                <div className="select">
                    <label >Produto editado: </label>
                    <select name="select" onChange={(e)=>setIdProduto(e.target.value)}>
                        <option value="">Selecione um produto</option>
                        {mapProdutos()}
                    </select>

                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setNome(e.target.value)} required="required" />
                    <span>Nome</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setPreco(e.target.value)} required="required" />
                    <span>Preço</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setEstoque(e.target.value)} required="required" />
                    <span>Estoque</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setCategoria(e.target.value)} required="required" />
                    <span>Categoria</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setDescricao(e.target.value)} required="required" />
                    <span>Descrição</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setImagem(e.target.value)} required="required" />
                    <span>Imagem</span>
                    <i></i>
                </div>
                <div className='select'>
                    <input type="submit" className="submit" value="Editar" />
                </div>       
            </form>
        </div>
    </section>  
    )
}