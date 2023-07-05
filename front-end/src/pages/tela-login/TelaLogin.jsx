// import {getProdutos } from '../../apiConnectProduto'
import { getCliente } from '../../apiConnectCliente'
import { getVendedor } from '../../apiConnectVendedor'
import "./tela-login.css"
import { useState } from 'react'

import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'
import { useNavigate } from 'react-router-dom'

export default function TelaLogin(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const {logarCliente} = useContext(UsuarioContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        
        getCliente(email,senha).then(cliente => {
            console.log(email);
            console.log(senha);
            if(cliente[0]?.email == email && cliente[0]?.senha == senha){
                logarCliente();
                navigate('/tela-cliente-produtos');
            }

            else{
                getVendedor(email,senha).then(vendedor => {
                    if(vendedor[0]?.email == email && vendedor[0]?.senha == senha){
                        logarVendedor();
                        navigate('/tela-cliente-produtos');
                    }
        
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