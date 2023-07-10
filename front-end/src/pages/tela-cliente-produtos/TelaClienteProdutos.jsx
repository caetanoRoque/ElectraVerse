import "./tela-cliente-produtos.css"
import Logout from "../../assets/logout.svg"  
import Search from "../../assets/search.svg" 
import Cart from "../../assets/cart.svg" 

import Produto from "../../components/produto/Produto"
import { useEffect,useState, useContext } from "react"
import { getProdutos } from "../../connectApi/produto"
import { LoginContext } from "../../context/LoginContext"

export default function TelaClienteProdutos(){
    const [produtos, setProdutos] = useState([]);
    const [produtosPesquisados, setProdutosPesquisados] = useState([]);
    const { deslogarCliente } = useContext(LoginContext);
    const [pesquisa, setPesquisa] = useState('');
    const [pesquisou, setPesquisou] = useState(false);
    const [naoEncontrado, setNaoEncontrado] = useState(false);

    useEffect(()=>{
        setPesquisou(false);

        getProdutos().then(produtos_response=>{
            setProdutos(produtos_response.produtos);

            if(pesquisa != ''){
                setProdutosPesquisados(produtos_response.produtos.filter(produto => produto.nome.includes(pesquisa)))

                if(produtosPesquisados.length == 0)
                    setNaoEncontrado(true);
                
                else setNaoEncontrado(false);
            }

            else{
                setProdutosPesquisados(produtos_response.produtos)

                if(produtos_response.length == 0)
                    setNaoEncontrado(true);
                
                else setNaoEncontrado(false);
            }
        })
    },[pesquisou])

    const mapProdutos = ()=>{
        let componentes;

        if(!naoEncontrado){
            componentes = produtosPesquisados?.map((produto,key)=>{
                return (
                    <Produto key={key} produto={produto}/>
                )
            })
        }
        else{
            componentes = (<h1>Produto(s) não encontrado(s)</h1>)
        }

        return componentes;
    }

    const handleDeslogar = () => {
        localStorage.removeItem('clienteEmail');
        localStorage.removeItem('clienteSenha');
        deslogarCliente();
    }

    return(
        <div className="tela-principal">
          <header>
            <div className="menu" onClick={()=>handleDeslogar()}>
                <img src={Logout} width="33px" alt="Menu" />
                </div>
            <div className="barraPesquisa">
              <input type="text" onChange={e => setPesquisa(e.target.value)}/>
              <button onClick={() => setPesquisou(true)}><img src={Search} width="30px" alt="" /></button>
            </div>
            <div className="carrinho"><img src={Cart} width="40px" alt="" /></div>
          </header>

          <section>
                    {mapProdutos()}
          </section>
        </div>
    )
}