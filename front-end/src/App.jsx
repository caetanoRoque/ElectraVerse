import { useEffect,useContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getCliente } from './connectApi/cliente';
import { getVendedor } from './connectApi/vendedor';
import { LoginContext } from './context/LoginContext';

export default function Rotas(){
  const {
    clienteLogado, 
    vendedorLogado, 
    logarCliente, 
    logarVendedor, 
    tentandoLogar, 
    setTentandoLogar } = useContext(LoginContext);
  
  const [acessandoUrlManualmente, seAcessandoUrlManualmente] = useState(0);

  const clientePaths = [
    '/tela-cliente-produtos',
    '/tela-carrinho',
    '/tela-finalizacao-compra'
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

    // SE JÁ EXISTIR UM CLIENTE NO localstorage, TENTAR LOGAR
    if(localStorage.clienteEmail && localStorage.clienteSenha){

      setTentandoLogar(true);
      
      getCliente(localStorage.clienteEmail, localStorage.clienteSenha).then(cliente => {
        if(cliente[0]?.email == localStorage.clienteEmail && cliente[0]?.senha == localStorage.clienteSenha){
          setTentandoLogar(false)
          logarCliente();
        }
      })
    }

    // SE JÁ EXISTIR UM VENDEDOR NO localstorage, TENTAR LOGAR
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
  },[clienteLogado, vendedorLogado])
  
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