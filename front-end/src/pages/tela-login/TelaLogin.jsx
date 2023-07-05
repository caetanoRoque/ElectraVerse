// import {getProdutos } from '../../apiConnectProduto'
import { getCliente } from '../../apiConnectCliente'
import { getVendedor } from '../../apiConnectVendedor'
import "./tela-login.css"
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { logarCliente, logarVendedor } from '../../logarDeslogar'

export default function TelaLogin(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        new Promise(
            async (resolve) =>
        {
            await getCliente(email,senha).then(cliente => {
                if(cliente[0]?.email == email && cliente[0]?.senha == senha){
                    logarCliente();
                    resolve(navigate('/tela-cliente-produtos'));
                }
            })

            await getVendedor(email, senha).then(vendedor => {
                if(vendedor[0]?.email == email && vendedor[0]?.senha == senha){
                    logarVendedor();
                    resolve(navigate('/tela-editar-produto'))
                }
            })
            
            alert("Email ou senha incorreta")
        })

        // getCliente(email,senha).then(cliente => {
        //     if(cliente[0]?.email == email && cliente[0]?.senha == senha){
        //         logarCliente();
        //         navigate('/tela-cliente-produtos');
        //     }

        //     else{
        //         getVendedor(email,senha).then(vendedor => {
        //             if(vendedor[0]?.email == email && vendedor[0]?.senha == senha){
        //                 logarVendedor();
        //                 navigate('/tela-cliente-produtos');
        //             }
        
        //             else
        //                 alert('Email ou senha incorretos')
        //         })
        //     }
        // })
        
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