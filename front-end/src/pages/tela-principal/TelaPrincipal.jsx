import Menu from "../../assets/menu.svg"  
import "./tela-principal.css"
import Search from "../../assets/search.svg" 
import Cart from "../../assets/cart.svg" 
import { getProdutos } from "../../apiConnectProduto"
import { useEffect,useState } from "react"
import Produto from "../../components/produto/Produto"

export default function TelaPrincipal(){
    const [produtos, setProdutos] = useState(['a']);

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

    return(
        <div className="tela-principal">
          <header>
            <div className="menu"><img src={Menu} width="40px" alt="" /></div>
            <div className="barraPesquisa">
              <input type="text" />
              <button><img src={Search} width="30px" alt="" /></button>
            </div>
            <div className="carrinho"><img src={Cart} width="40px" alt="" /></div>
          </header>

          <section>
                <div className="produtos">
                    {mapProdutos()}
                </div>
          </section>
        </div>
    )
}