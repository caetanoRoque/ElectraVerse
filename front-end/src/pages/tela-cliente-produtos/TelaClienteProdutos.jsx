import Logout from "../../assets/logout.svg"  
import "./tela-cliente-produtos.css"
import Search from "../../assets/search.svg" 
import Cart from "../../assets/cart.svg" 
import { getProdutos } from "../../apiConnectProduto"
import { useEffect,useState } from "react"
import Produto from "../../components/produto/Produto"

import { useContext } from "react";
import { UsuarioContext } from '../../context/UsuarioContext';
import { useNavigate } from 'react-router-dom'

export default function TelaClienteProdutos(){
    const [produtos, setProdutos] = useState(['a']);

    const {deslogarCliente} = useContext(UsuarioContext)
    const navigate = useNavigate();

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
        deslogarCliente()
        return navigate('/')
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
          </section>
        </div>
    )
}