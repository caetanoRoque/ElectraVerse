import { getCliente } from '../../connectApi/cliente'
import { getVendedor } from '../../connectApi/vendedor'
import "./tela-login.css"
import { useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/alert/Alert'

export default function TelaLogin(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [alert, setAlert] = useState(false)
    const {logarCliente, logarVendedor} = useContext(LoginContext)

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        const cliente = await getCliente(email,senha);

        if(cliente[0]?.email == email && cliente[0]?.senha == senha){
            localStorage.setItem('clienteEmail',cliente[0].email)
            localStorage.setItem('clienteSenha',cliente[0].senha)
            logarCliente();
            return
        }

        const vendedor = await getVendedor(email,senha);

        if(vendedor[0]?.email == email && vendedor[0]?.senha == senha){
            localStorage.setItem('vendedorEmail',vendedor[0].email)
            localStorage.setItem('vendedorSenha',vendedor[0].senha)
            logarVendedor();
            return
        }

        setAlert(true)
    }

    return(
        <section className='tela-login'>
            <div className="box">
                <form onSubmit={()=>handleLogin(event)}>
                    <h2>Sign in</h2>
                    <div className="inputBox">
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" onChange={(e)=> setSenha(e.target.value)} required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a onClick={()=>navigate('/tela-cadastro')}>Signup</a>
                    </div>
                    <input type="submit" className="submit" value="login" />
                </form>
            </div>
            {alert && <Alert message="Usuário ou senha incorretos" setAlert={setAlert}/>}
        </section>        
    )
}