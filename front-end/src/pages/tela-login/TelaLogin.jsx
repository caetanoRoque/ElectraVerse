// import {getProdutos } from '../../apiConnectProduto'
import { logarCliente } from '../../apiConnectCliente'
import "./tela-login.css"
import { useEffect,useState } from 'react'

export default function TelaLogin(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    
    const handleLogin = (event) => {
        event.preventDefault();
        logarCliente(email,senha).then(cliente => console.log(cliente))
        window.location.href = '/tela-principal'
    }

    return(
        <section className='tela-login'>
            <div class="box">
                <form onSubmit={()=>handleLogin(event)}>
                    <h2>Sing in</h2>
                    <div class="inputBox">
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" onChange={(e)=> setSenha(e.target.value)} required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="/tela-cadastro">Singup</a>
                    </div>
                    <input type="submit" class="submit" value="login" />
                </form>
            </div>
        </section>        
    )
}