// import {getProdutos } from '../../apiConnectProduto'
import { logarCliente } from '../../apiConnectCliente'
import { logarVendedor } from '../../apiConnectVendedor'
import "./tela-login.css"
import { useState } from 'react'

export default function TelaLogin(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    
    const handleLogin = (event) => {
        event.preventDefault();
        
        logarCliente(email,senha).then(cliente => {
            if(cliente[0]?.email == email && cliente[0]?.senha == senha)
                    window.location.href = '/tela-principal'                    

            else{
                logarVendedor(email,senha).then(vendedor => {
                    if(vendedor[0]?.email == email && vendedor[0]?.senha == senha)
                        window.location.href = '/tela-principal'
        
                    else
                        alert('Email ou senha incorretos')
                })
            }
        })
        
    }

    return(
        <section className='tela-login'>
            <div className="box">
                <form onSubmit={()=>handleLogin(event)}>
                    <h2>Sing in</h2>
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
                        <a href="/tela-cadastro">Singup</a>
                    </div>
                    <input type="submit" className="submit" value="login" />
                </form>
            </div>
        </section>        
    )
}