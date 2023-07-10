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
    const [encontrado, setEncontrado] = useState(true);

    const [abacaxi, setAbacaxi] = useState('');

    useEffect(()=>{
        console.log('aa')
    },[abacaxi])

    useEffect(()=>{
        getProdutos().then(produtos_response=>{

            if(produtos_response.produtos.length > 0){
                setProdutos(produtos_response.produtos);
                setEncontrado(true)
            }
            else setEncontrado(false)
        })
    },[])

    const pesquisar = () => {
        if(pesquisa == ''){
            setPesquisou(false);
        }
        else{
            setPesquisou(true)

            let pesquisados = []
            pesquisados = produtos.filter(produto => produto.nome.toLowerCase().includes(pesquisa));
            setProdutosPesquisados(pesquisados);
        
            if(pesquisados == []) setEncontrado(false);
            else                  setEncontrado(true);
        }
    }
    
    const mapProdutos = ()=>{
        let componentes;

        if(!pesquisou) componentes = produtos;
        else           componentes = produtosPesquisados;

        if(encontrado){
            componentes = componentes.map(
                (produto,key) =>
                <Produto key={key} produto={produto}/> 
            )
        }
        else 
            componentes = (<h1>Produto(s) não encontrado(s)</h1>)

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

                <button onClick={() => pesquisar()}>
                    <img src={Search} width="30px" alt="" />
                </button>
            </div>

            <div className="carrinho">
                <img src={Cart} width="40px" alt="" />
            </div>
          </header>

          <section>
                    {mapProdutos()}
          </section>
        </div>
    )
}