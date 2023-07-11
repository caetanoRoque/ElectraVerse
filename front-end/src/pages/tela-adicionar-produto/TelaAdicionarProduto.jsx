import './tela-adicionar-produto.css'
import { useState, useContext} from 'react'
import { postProduto } from '../../connectApi/produto';
import Edit from '../../assets/edit.svg'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from "../../context/LoginContext"
import Logout from "../../assets/logout.svg" 
import Alert from '../../components/alert/Alert'

export default function TelaAdicionarProduto() {
    const [produto, setProduto] = useState({});
    const navigate = useNavigate();
    const { deslogarVendedor } = useContext(LoginContext);

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    // CONTROLAR INPUT DE PREÇO
    // impedir qualquer caractere além de número, ponto ou virgula
    // impedir que tenha mais de uma virgula ou ponto
    const controlPrecoInput = (value, event, e) => {
        if (
            /\D|\C/.test(event.key) &&  //NÃO FOR UM NUMERO
            event.key != ',' &&  //NÃO FOR UMA VIRGULA 
            event.key != '.' &&  //NÃO FOR UM PONTO 
            event.key.length == 1)   //NÃO FOR UMA TECLA ESPECIAL 
        {
            event.preventDefault();
        }

        // VERIFICAR SE NÃO HÁ MAIS DE UMA VIRGULA OU PONTO
        if ((value.includes(',') || value.includes('.')) && (event.key == ',' || event.key == '.')) {
            event.preventDefault();
        }
    }

    const onBlurPreco = (value, input) => {
        //MUDAR PONTO PARA VIRGULA E REMOVER VIRGULA NO FINAL OU INICIO DO INPUT
        let newValue = value;

        if (newValue.includes('.')) newValue = newValue.replace('.', ',');
        if (newValue.slice(-1) == ',') newValue = newValue.slice(0, -1);
        if (newValue[0] == ',') newValue = newValue.slice(1);

        input.target.value = newValue;
        handleProduto('preco', newValue);
    }

    const controlEstoqueInput = (event) => {
        if (event.key == ',' || event.key == '.')
            event.preventDefault();
    }


    // EDITAR PRODUTO
    const handleAdicionar = async (event) => {
        event.preventDefault();

        // MODIFICAR VIRGULA DO PREÇO PARA PONTO
        let newProduto = produto;
        newProduto.preco = Number(newProduto.preco.replace(',', '.'));

        // OBTER RESULTADO AO TENTAR CADASTRAR UM PRODUTO
        const { mensagem } = await postProduto({ ...newProduto });

        if (mensagem == 'Produto cadastrado com sucesso') {
            setAlertMessage('Produto cadastrado com sucesso!');
            setAlert(true)

            // RESETAR INPUTS
            for (let i = 0; i < document.forms[0].length-1; i++) {
                document.forms[0][i].value = '';
                document.forms[0][i].blur();
            }
        }

        else{
            setAlertMessage('Campos inválidos');
            setAlert(true);
        } 

    }

    const handleProduto = (index, value) => {
        setProduto({ ...produto, [index]: value })
    }

    const handleDeslogar = () => {
        localStorage.removeItem('vendedorEmail');
        localStorage.removeItem('vendedorSenha');
        deslogarVendedor();
    }
    

    return (
        <section className="tela-adicionar-produto">
            <button type="button" className='editar' onClick={()=>navigate("/tela-edicao-produto")}><img src={Edit} alt="" /></button>
            <div className="logout" onClick={()=>handleDeslogar()}>
                <img src={Logout} width="33px" alt="Menu" />
            </div>
            <div className="box">
                <form onSubmit={() => handleAdicionar(event)}>

                    <h2>Adicionar Produto</h2>

                    {/* NOME */}
                    <div className="inputBox">
                        <input
                            type="text"
                            onChange={e => handleProduto('nome', e.target.value)}
                            required="required"
                        />
                        <span>Nome</span>
                        <i></i>
                    </div>

                    {/* PREÇO */}
                    <div className="inputBox">
                        <input
                            type="text"
                            onKeyDown={e => controlPrecoInput(e.target.value, event, e)}
                            onChange={e => handleProduto('preco', e.target.value)}
                            onBlur={e => onBlurPreco(e.target.value, e)}
                            required="required"
                        />
                        <span>Preço</span>
                        <i></i>
                    </div>

                    {/* ESTOQUE */}
                    <div className="inputBox">
                        <input
                            type="number"
                            onKeyDown={() => controlEstoqueInput(event)}
                            onChange={e => handleProduto('estoque', e.target.value)}
                            required="required"
                        />
                        <span>Estoque</span>
                        <i></i>
                    </div>

                    {/* CATEGORIA */}
                    <div className="inputBox">
                        <input
                            type="text"
                            onChange={e => handleProduto('categoria', e.target.value)}
                            required="required"
                        />
                        <span>Categoria</span>
                        <i></i>
                    </div>

                    {/* DESCRIÇÃO */}
                    <div className="inputBox">
                        <input
                            type="text"
                            onChange={e => handleProduto('descricao', e.target.value)}
                            required="required"
                        />
                        <span>Descrição</span>
                        <i></i>
                    </div>

                    {/* IMAGEM */}
                    <div className="inputBox">
                        <input
                            type="text"
                            onChange={e => handleProduto('imagem', e.target.value)}
                            required="required"
                        />
                        <span>Imagem</span>
                        <i></i>
                    </div>

                    {/* SUBMIT */}
                    <div className='submitBox'>
                        <input type="submit" className="submit" value="Adicionar" />
                    </div>
                </form>
                {alert && <Alert message={alertMessage} setAlert={setAlert}/>}
            </div>
        </section>
    )
}