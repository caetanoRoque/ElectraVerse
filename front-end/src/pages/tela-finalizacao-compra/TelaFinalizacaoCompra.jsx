import './tela-finalizacao-compra.css'
import { getCliente } from '../../connectApi/cliente'
import { putProduto } from '../../connectApi/produto'
import { getProdutos } from '../../connectApi/produto'
import Return from '../../assets/return.svg'
import Alert from '../../components/alert/Alert'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelaFinalizacaoCompra() {
    const [cliente, setCliente] = useState({});
    const [endereco, setEndereco] = useState();
    const [precoTotal, setPrecoTotal] = useState();
    const [alert, setAlert] = useState(false);

    const [alertMessage, setAlertMessage] = useState('');
    const [sucesso, setSucesso] = useState(false)

    const navigate = useNavigate();


    useEffect(() => {
        getCliente(localStorage.clienteEmail, localStorage.clienteSenha).then(c => {
            setCliente(c[0]);
            setEndereco(c[0].endereco);
        })

        let carrinho = JSON.parse(localStorage.carrinho);

        let total = 0;

        for (let c of carrinho) {
            total += Number(c.preco) * Number(c.estoqueSelecionado);
        }
        setPrecoTotal(total)

    }, [])

    const handleVoltar = () => {
        navigate("/tela-carrinho")
    }

    const comprar = async () => {
        let carrinho = JSON.parse(localStorage.carrinho);
        let {produtos} = await getProdutos();

        if(endereco == ''){
            setAlertMessage('Adicione um endereço');
            setAlert(true);
            return;
        }

        //VERIFICAR SE O PRODUTO AINDA EXISTE NO ESTOQUE
        for(let produto of carrinho){
            let produtoNoDatabase =  produtos.find(p => p.id_produto == produto.id_produto)

            if(produtoNoDatabase.estoque < produto.estoqueSelecionado){
                setAlertMessage(`O produto ${produto.nome} não existe mais no estoque`)
                setSucesso(false)
                setAlert(true);
                return
            }
        }

        for(let produto of carrinho){
            produto.estoque = Number(produto.estoque) - Number(produto.estoqueSelecionado);

            let resultado = await putProduto({...produto});
            console.log(resultado);
        }

        localStorage.setItem('carrinho', '');
        setAlertMessage('Compra efetuada com sucesso!')
        setSucesso(true);
        setAlert(true);
    }

    const alertOnClose = () => {
        if(sucesso){
            setSucesso(false)
            navigate('/tela-cliente-produtos');
        }
    }

    return (
        <section className="tela-finalizacao-compra">

            <button className='editar' onClick={() => handleVoltar()}><img src={Return} alt="Voltar" /></button>
            <div className='container'>
                <div className='box'>
                    <h1>Finalização de compra</h1>
                    <div className='endereco'>
                        <label>Endereço: </label>
                        <input type="text" value={endereco ? endereco : ''} onChange={(event) => setEndereco(event.target.value)} />
                    </div>
                    <div className='preco'>
                        <label >Total: </label>
                        <p>R$ {Number(precoTotal)?.toFixed(2).toString().replace('.',',')}</p>
                    </div>
                    <button onClick={()=> comprar()}>Finalizar Compra </button>
                </div>
            </div>

            {alert && <Alert message={alertMessage} setAlert={setAlert} onClose={alertOnClose}/>}
        </section>
    )
}