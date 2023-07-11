import './tela-carrinho.css';
import { useState, useEffect, useContext } from 'react';
import Logout from "../../assets/logout.svg"
import Return from "../../assets/return.svg"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"
import ProdutoCarrinho from '../../components/produto-carrinho/ProdutoCarrinho';

export default function TelaCarrinho() {

    const { deslogarCliente } = useContext(LoginContext);

    const [produtos,setProdutos] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.carrinho){
            let carrinho = JSON.parse(localStorage.carrinho);

            for(let c of carrinho){
                c.estoqueSelecionado = 1;
            }

            setProdutos(carrinho);
            localStorage.setItem('carrinho',JSON.stringify(carrinho));
        }
        
    },[])

    const handleDeslogar = () => {
        localStorage.removeItem('clienteEmail');
        localStorage.removeItem('clienteSenha');
        deslogarCliente();
    }

    const handleVoltar = () => {
        navigate("/tela-cliente-produtos")
    }

    const mapProdutos = ()=>{
        let componentes;

        componentes = produtos?.map(
            (produto,key) =>
            <ProdutoCarrinho key={key} produto={produto} setProdutos={setProdutos}/> 
        )
        if(localStorage.carrinho){
            return componentes
        }
        else{
            return (<h1 className='erro'>Nenhum produto selecionado</h1>)
        }
    }


    const comprar = async () => {
        navigate('/tela-finalizacao-compra')    
    }

    return (
        <section className='tela-carrinho'>
            <button className='comprar' onClick={()=>comprar()}>Comprar</button>
            <header>
                <button onClick={() => handleDeslogar()} className='logout'><img src={Logout} alt="Logout"  /></button>
                <button className='editar' onClick={() => handleVoltar()}><img src={Return} alt="Voltar" /></button>
            </header>
            <div className="container">
                {mapProdutos()}
            </div>
        </section>
    )
}