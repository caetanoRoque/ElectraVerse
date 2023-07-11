import './tela-edicao-produto.css'
import { useState , useEffect, useContext} from 'react'
import { getProdutos, putProduto} from "../../connectApi/produto"
import { deleteProduto } from '../../connectApi/produto'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from "../../context/LoginContext"
import Logout from "../../assets/logout.svg" 
import Alert from '../../components/alert/Alert'

export default function TelaEdicaoProduto(){
    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({});
    const [editado, setEditado] = useState(false);
    const navigate = useNavigate();
    const { deslogarVendedor } = useContext(LoginContext);

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(()=>{
        handleProdutos();
    },[])

    // AO EDITAR UM PRODUTO, ATUALIZAR PRODUTOS NO SELECT
    useEffect(()=>{
        if(editado){
            handleProdutos();
            setEditado(false);

        }
    },[editado])
       
    //OBTER TODOS OS PRODUTOS
    const handleProdutos = () => {
        getProdutos().then(produto=>{
            setProdutos(produto.produtos);
        })
    }

    // CONTROLAR INPUT DE PREÇO
    // impedir qualquer caractere além de número, ponto ou virgula
    // impedir que tenha mais de uma virgula ou ponto
    const controlPrecoInput = (value,event,e) => {
        if( 
            /\D|\C/.test(event.key) &&  //NÃO FOR UM NUMERO
            event.key != ','        &&  //NÃO FOR UMA VIRGULA 
            event.key != '.'        &&  //NÃO FOR UM PONTO 
            event.key.length == 1   )   //NÃO FOR UMA TECLA ESPECIAL 
        {
            event.preventDefault();
        }
        
        // VERIFICAR SE NÃO HÁ MAIS DE UMA VIRGULA OU PONTO
        if((value.includes(',') || value.includes('.')) && (event.key == ',' || event.key == '.'))
        {
            event.preventDefault();
        } 
    }

    const onBlurPreco = (value, input) => {
        //MUDAR PONTO PARA VIRGULA E REMOVER VIRGULA NO FINAL OU INICIO DO INPUT
        let newValue = value;

        if(newValue.includes('.'))    newValue = newValue.replace('.',',');
        if(newValue.slice(-1) == ',') newValue = newValue.slice(0,-1);
        if(newValue[0] == ',')        newValue = newValue.slice(1);
        
        input.target.value = newValue;
        handleProduto('preco', newValue);
    }

    const controlEstoqueInput = (event) => {
        if(event.key == ',' || event.key == '.')
            event.preventDefault();
    }


    // EDITAR PRODUTO
    const handleEditar = async (event) => {
        event.preventDefault();

        // MODIFICAR VIRGULA DO PREÇO PARA PONTO
        let newProduto = produto;
        newProduto.preco = Number(newProduto.preco.replace(',','.'));

        // OBTER RESULTADO AO TENTAR CADASTRAR UM PRODUTO
        const { mensagem } = await putProduto({...newProduto});

        if(mensagem == 'Produto editado com sucesso'){
            setAlertMessage('Produto editado com sucesso!')
            setAlert(true);
    
            // RESETAR INPUTS
            for(let i = 1; i < document.forms[0].length-1; i++){
                document.forms[0][i].value = '';
                document.forms[0][i].blur();
            }
    
            // SELECIONAR O PRIMEIRO OPTION DO SELECT
            document.forms[0][0].selectedIndex = 0;
    
            setEditado(true);
        }
        
        else{
            setAlertMessage('Campos inválidos')
            setAlert(true)
        } 
        
    }

    const mapProdutos = ()=>{
        let options = produtos?.map((produto,key)=>{
            return (
                <option key={key} value={produto?.id_produto}>{produto?.nome}</option>
            )
        })
        return options;
    }

    const handleProduto = (index, value) =>{
        setProduto({...produto, [index]: value})
    }

    const deletarProduto = async ()=>{
        const resposta = await deleteProduto(produto.id_produto)

        console.log(resposta)

        if(resposta.mensagem == 'Produto deletado com sucesso'){
            setAlertMessage('Produto removido com sucesso')
            setAlert(true)
            setEditado(true);
        }
        else 
            setAlertMessage('Produto não pode ser deletado')
            setAlert(true)
    }   

    const handleDeslogar = () => {
        localStorage.removeItem('vendedorEmail');
        localStorage.removeItem('vendedorSenha');
        deslogarVendedor();
    }

    return(
        <section className='tela-edicao-produto'>
            <button type="button" className='editar' onClick={()=>navigate("/tela-adicionar-produto")}>+</button>
            <div className="logout" onClick={()=>handleDeslogar()}>
                <img src={Logout} width="33px" alt="Menu" />
            </div>
            <div className="box">
                <form onSubmit={()=>handleEditar(event)}>

                    <h2>Editar Produto</h2>

                    {/* SELECT */}
                    <div className="select">
                        <label >Produto editado: </label>
                        <select 
                            name     = "select"
                            onChange = { e => handleProduto('id_produto', e.target.value) }
                            required = "required"
                        > 
                            <option value="">Selecione um ítem</option>
                            {mapProdutos()}
                        </select>
                        <button type='button' onClick={()=>deletarProduto()}>X</button>
                    </div>

                    {/* NOME */}
                    <div className="inputBox">
                        <input 
                            type     = "text" 
                            onChange = { e => handleProduto('nome', e.target.value) } 
                            required = "required" 
                        />
                        <span>Nome</span>
                        <i></i>
                    </div>

                    {/* PREÇO */}
                    <div className="inputBox">
                        <input
                            type      = "text" 
                            onKeyDown = { e => controlPrecoInput(e.target.value,event,e) }
                            onChange  = { e => handleProduto('preco', e.target.value) }
                            onBlur    = { e => onBlurPreco(e.target.value, e)} 
                            required  = "required" 
                        />
                        <span>Preço</span>
                        <i></i>
                    </div>

                    {/* ESTOQUE */}
                    <div className="inputBox">
                        <input 
                            type      = "number" 
                            onKeyDown = { () => controlEstoqueInput(event) }
                            onChange  = { e => handleProduto('estoque', e.target.value) } 
                            required  = "required" 
                        />
                        <span>Estoque</span>
                        <i></i>
                    </div>

                    {/* CATEGORIA */}
                    <div className="inputBox">
                        <input 
                            type     = "text" 
                            onChange = { e => handleProduto('categoria', e.target.value) } 
                            required = "required"
                        />
                        <span>Categoria</span>
                        <i></i>
                    </div>

                    {/* DESCRIÇÃO */}
                    <div className="inputBox">
                        <input 
                            type     = "text" 
                            onChange = { e => handleProduto('descricao', e.target.value) } 
                            required = "required" 
                        />
                        <span>Descrição</span>
                        <i></i>
                    </div>

                    {/* IMAGEM */}
                    <div className="inputBox">
                        <input 
                            type     = "text" 
                            onChange = { e => handleProduto('imagem', e.target.value) } 
                            required = "required" 
                        />
                        <span>Imagem</span>
                        <i></i>
                    </div>

                    {/* SUBMIT */}
                    <div className='submitBox'>
                        <input type="submit" className="submit" value="Editar" />
                    </div>       
                </form>
                {alert && <Alert message={alertMessage} setAlert={setAlert}/>}
            </div>
        </section>  
    )
}