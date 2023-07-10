import { useEffect,useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getCliente } from './connectApi/cliente';
import { getVendedor } from './connectApi/vendedor';
import { LoginContext } from './context/LoginContext';

export default function Rotas(){
  const {clienteLogado, vendedorLogado, logarCliente, logarVendedor} = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(()=>{

    if(localStorage.clienteEmail && localStorage.clienteSenha){
      getCliente(localStorage.clienteEmail, localStorage.clienteSenha).then(cliente => {
        if(cliente[0]?.email == localStorage.clienteEmail && cliente[0]?.senha == localStorage.clienteSenha){
          logarCliente();
          console.log(cliente)
        }
      })
    }
    
    else if(localStorage.vendedorEmail && localStorage.vendedorSenha){
      getVendedor(localStorage.vendedorEmail, localStorage.vendedorSenha).then(vendedor => {
        if(vendedor[0]?.email == localStorage.vendedorEmail && vendedor[0]?.senha == localStorage.vendedorSenha)
        logarVendedor();
      })
    }

    else navigate('/');

  },[])
  
  useEffect(()=>{   
    
    if(clienteLogado)
      navigate('/tela-cliente-produtos');
    
    else if(vendedorLogado)
      navigate('/tela-adicionar-produto');

    else if(!clienteLogado && !vendedorLogado)
      navigate('/')
    
  },[clienteLogado,vendedorLogado])
    
    return (
        <>
          <Outlet/>
        </>
    )
}