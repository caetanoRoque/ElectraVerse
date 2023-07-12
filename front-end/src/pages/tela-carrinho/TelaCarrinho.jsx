import './tela-carrinho.css';
import { useState, useEffect, useContext } from 'react';
import Logout from "../../assets/logout.svg"
import Return from "../../assets/return.svg"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"
import ProdutoCarrinho from '../../components/produto-carrinho/ProdutoCarrinho';
import Alert from '../../components/alert/Alert';

export default function TelaCarrinho() {

    const { deslogarCliente } = useContext(LoginContext);

    const [produtos,setProdutos] = useState([]);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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
        localStorage.clear()
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
        let carrinho = JSON.parse(localStorage.carrinho)
        let tudoZerado = true;

        for(let produto of carrinho){
            if(produto.estoqueSelecionado > 0){
                tudoZerado = false;
            }
        }
        
        if(tudoZerado){
            setAlertMessage('Quantidade de produtos selecionados inválida');
            setAlert(true);
        }

        else if(JSON.parse(localStorage.carrinho).estoqueSelecionado == 0){
            setAlert(true)
        }
        else if(localStorage.carrinho){
            navigate('/tela-finalizacao-compra')    
        }
        else{
            setAlert(true)
        }
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

            {alert && <Alert message={alertMessage} setAlert={setAlert}/>}
        </section>
    )
}