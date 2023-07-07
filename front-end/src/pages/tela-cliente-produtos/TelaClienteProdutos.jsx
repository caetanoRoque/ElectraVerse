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
    const { deslogarCliente } = useContext(LoginContext);

    useEffect(()=>{
        getProdutos().then(produto=>{
            setProdutos(produto.produtos);
        })
    },[])

    const mapProdutos = ()=>{
        let componentes = produtos?.map((produto,key)=>{
            return (
                <Produto key={key} produto={produto}/>
            )
        })
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
              <input type="text" />
              <button><img src={Search} width="30px" alt="" /></button>
            </div>
            <div className="carrinho"><img src={Cart} width="40px" alt="" /></div>
          </header>

          <section>
                    {mapProdutos()}
                    {mapProdutos()}
                    {mapProdutos()}
                    {mapProdutos()}
          </section>
        </div>
    )
}