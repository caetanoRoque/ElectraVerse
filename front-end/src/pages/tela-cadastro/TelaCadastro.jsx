import './tela-cadastro.css'
import { useState } from 'react'
import { criarCliente } from '../../connectApi/cliente'
import { criarVendedor } from '../../connectApi/vendedor'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/alert/Alert'
import Return from '../../assets/return.svg'


export default function TelaCadastro(){
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()
    const [inscricao, setInscricao] = useState()
    const [endereco, setEndereco] = useState()
    const [tipo, setTipo] = useState('cliente')
    const [alert, setAlert] = useState(false)
    
    const [alertMessage, setAlertMessage] = useState('');
    const [sucesso, setSucesso] = useState(false);
    
    
    const onCloseAlert = () => {
        if(sucesso){
            setSucesso(false);
            return navigate('/')
        }
    }
    
    const navigate = useNavigate();

    const handleCadastro = async (event) => {
        event.preventDefault();

        if(tipo == 'cliente'){
            const resposta = await criarCliente(nome,email,senha,telefone,inscricao,endereco);

            if(resposta == 'erro'){
                setAlertMessage('Informações invalidas ou e-mail já cadastrado');
                setAlert(true)
            }
            
            else{
                setAlertMessage('Cliente cadastrado com sucesso')
                setSucesso(true)
                setAlert(true)
            }
        }

        else if(tipo == 'vendedor'){
            const resposta = await criarVendedor(nome,email,senha,telefone,inscricao,endereco); 
            
            if(resposta == 'erro'){
                setAlertMessage('Informações invalidas ou e-mail já cadastrado')
                setAlert(true)  
            }

            else{
                setAlertMessage('Vendedor cadastrado com sucesso')
                setSucesso(true)
                setAlert(true)
            } 
        }  
    }

    const handleVoltar = () => {
        navigate("/")
    }
    
    return(
        <section className='tela-cadastro'>
        <button className="editar" onClick={() => handleVoltar()}><img src={Return} alt="Voltar" /></button>
        <div className="box">
            <form onSubmit={()=>handleCadastro(event)}>
                <h2>Cadastro</h2>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setNome(e.target.value)} required="required" />
                    <span>Nome</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setEmail(e.target.value)} required="required" />
                    <span>Email</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" onChange={(e)=> setSenha(e.target.value)} required="required" />
                    <span>Senha</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setTelefone(e.target.value)} required="required" />
                    <span>Telefone</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setInscricao(e.target.value)} required="required" />
                    <span>CPF</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setEndereco(e.target.value)} required="required" />
                    <span>Endereço</span>
                    <i></i>
                </div>
                <div className='select'>
                    <input type="submit" className="submit" value="Cadastrar" />
                    <select onChange={(e)=>setTipo(e.target.value)}>
                        <option value="cliente">Cliente</option>
                        <option value="vendedor">Vendedor</option>
                    </select>
                </div>
            </form>
            {alert && <Alert message={alertMessage} onClose={onCloseAlert} setAlert={setAlert}/>}
        </div>
    </section>  
    )
}