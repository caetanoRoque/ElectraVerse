import './tela-cadastro.css'
import { useState } from 'react'
import { criarCliente } from '../../apiConnectCliente'
import { criarVendedor } from '../../apiConnectVendedor'

export default function TelaCadastro(){
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [telefone, setTelefone] = useState()
    const [cpf, setCpf] = useState()
    const [endereco, setEndereco] = useState()
    const [tipo, setTipo] = useState('cliente')
    
    const handleLogin = (event) => {

        event.preventDefault();
        if(tipo == 'cliente'){
            criarCliente(nome,email,senha,telefone,cpf,endereco).then(cliente => {
                console.log(cliente)
            })
        }

        if(tipo == 'vendedor'){
            criarVendedor(nome,email,senha,telefone,cpf,endereco).then(vendedor => {
                alert(vendedor);
            })
        }  
    }
    
    return(
        <section className='tela-cadastro'>
        <div className="box">
            <form onSubmit={()=>handleLogin(event)}>
                <h2>Cadastro</h2>
                <div className="inputBox">
                    <input type="text" onChange={(e)=> setNome(e.target.value)} required="required" />
                    <span>Nome</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} required="required" />
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
                    <input type="text" onChange={(e)=> setCpf(e.target.value)} required="required" />
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
        </div>
    </section>  
    )
}