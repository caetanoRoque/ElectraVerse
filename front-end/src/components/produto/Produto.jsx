import "./produto.css"
import { useNavigate } from "react-router-dom"

export default function Produto({produto, setAlert}){
    const navigate = useNavigate();

    const direcionarCarrinho = () =>{
        if(produto.estoque == 0){
            setAlert(true)
            return
        }
        
        if(localStorage.carrinho){
            
            let newCarrinho = JSON.parse(localStorage.carrinho);
            let newProduto = {...produto};
            newProduto.estoqueSelecionado = 1
            
            let produtoRepetido = newCarrinho.find(p => p.id_produto == newProduto.id_produto)
            
            if(!produtoRepetido){
                newCarrinho.push(newProduto);
                localStorage.setItem('carrinho', JSON.stringify(newCarrinho));
            }
        }
        else{
            let newProduto = {...produto};
            newProduto.estoqueSelecionado = 1
            localStorage.setItem('carrinho',JSON.stringify([newProduto]))
        }
        navigate('/tela-carrinho')
    }

    return(
        <div className="produto" title={produto.descricao}>
            
            <p className="estoque">{produto.estoque} un</p>

            <article>
                <figure>
                    <img src={produto.imagem} alt="" />
                </figure>
                <div className="info">
                    <p>{produto.nome}</p>
                    <label>R$ {Number(produto.preco)?.toFixed(2).toString().replace('.',',')}</label>
                </div>
                
            </article>
            
            <div className="comprar">
                <button onClick={()=> direcionarCarrinho()}>COMPRAR</button>
            </div>
        </div>
    )
}