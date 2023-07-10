import { useEffect,useContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getCliente } from './connectApi/cliente';
import { getVendedor } from './connectApi/vendedor';
import { LoginContext } from './context/LoginContext';

export default function Rotas(){
  const {clienteLogado, vendedorLogado, logarCliente, logarVendedor} = useContext(LoginContext);
  const [tentandoLogar, setTentandoLogar] = useState(true); 
  const [acessandoUrlManualmente, seAcessandoUrlManualmente] = useState(0);

  const clientePaths = [
    '/tela-cliente-produtos'
  ]

  const vendedorPaths = [
    '/tela-adicionar-produto',
    '/tela-edicao-produto'
  ]

  const inicioPaths = [
    '/',
    '/tela-cadastro'
  ]

  const navigate = useNavigate();

  useEffect(()=>{

    if(localStorage.clienteEmail && localStorage.clienteSenha){
      setTentandoLogar(true);
      
      getCliente(localStorage.clienteEmail, localStorage.clienteSenha).then(cliente => {
        if(cliente[0]?.email == localStorage.clienteEmail && cliente[0]?.senha == localStorage.clienteSenha){
          setTentandoLogar(false)
          logarCliente();
        }
      })
    }
    
    else if(localStorage.vendedorEmail && localStorage.vendedorSenha){
      setTentandoLogar(true)
      let email = localStorage.vendedorEmail;
      let senha = localStorage.vendedorSenha;
      
      getVendedor(email, senha).then(vendedor => {
        if(vendedor[0]?.email == email && vendedor[0]?.senha == senha){
          setTentandoLogar(false)
          logarVendedor();
        }
      })
    }
    else if(!inicioPaths.includes(window.location.pathname)){
      setTentandoLogar(false);
      seAcessandoUrlManualmente(acessandoUrlManualmente+1);
    } 

  },[])
  
  useEffect(()=>{ 

    if(tentandoLogar) return;

    let path = window.location.pathname;

    if(clienteLogado){
      if(inicioPaths.includes(path) || vendedorPaths.includes(path)){
        navigate('/tela-cliente-produtos')
      }
      else if(clientePaths.includes(path)){
        navigate(path);
      }
    }
    
    else if(vendedorLogado){
      
      if(inicioPaths.includes(path) || clientePaths.includes(path)){
        navigate('/tela-adicionar-produto')
      }
      else if(vendedorPaths.includes(path)){
        navigate(path);
      }
      
    }

    else if(!clienteLogado && !vendedorLogado){
      if(clientePaths.includes(path) || vendedorPaths.includes(path)){
        navigate('/');
      }
      else if(inicioPaths.includes(path)){
        navigate(path)
      }
    }
    
  },[clienteLogado,vendedorLogado, acessandoUrlManualmente])
    
    return (
        <>
          <Outlet/>
        </>
    )
}