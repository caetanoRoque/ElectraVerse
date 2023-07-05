import TelaLogin from './pages/tela-login/TelaLogin'
import TelaClienteProdutos from './pages/tela-cliente-produtos/TelaClienteProdutos';
import TelaCadastro from './pages/tela-cadastro/TelaCadastro';

import {createBrowserRouter,redirect,RouterProvider,} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto';

import { getCliente } from './apiConnectCliente';

export default function Router(){
  const [clienteLogado, setClienteLogado] = useState('');
  const [vendedorLogado, setVendedorLogado] = useState('');

  useEffect(()=>{
    if(!localStorage.clienteLogado)
      localStorage.setItem('clienteLogado', false);
      
    if(!localStorage.vendedorLogado)
      localStorage.setItem('vendedorLogado', false);

    // if(localStorage.clienteEmail && localStorage.clienteEmail)
    // {
    //   getCliente(localStorage.clienteEmail, localStorage.clienteSenha).then(cliente =>{
    //     if(cliente[0]?.email == email && cliente[0]?.senha == senha){
    //       setClienteLogado('true');
    //     }
    //     else setClienteLogado('false');
    //   })
    // }

    setClienteLogado(localStorage.clienteLogado);
    setVendedorLogado(localStorage.vendedorLogado);
  },[])
    
  const checkIsLogin = () => {

    if(clienteLogado == "true")  return <Navigate to='/tela-cliente-produtos'/>
    if(localStorage.vendedorLogado == "true") return <Navigate to="/tela-edicao-produto"/>
  }

  const router = createBrowserRouter([
    {
        path: "*",
        element: <p style={{color:'#fff'}}>Página não encontrada</p>,
    },
    {
      path: "/",
      element: checkIsLogin('/') || <TelaLogin/>,
    },
    {
      path: "/tela-cliente-produtos",
      element: clienteLogado == 'true' ? <TelaClienteProdutos setClienteLogado={setClienteLogado}/> : <Navigate to='/'/>,
    },
    {
      path: "/tela-cadastro",
      element: checkIsLogin() || <TelaCadastro/>,
    },
    {
      path: "/tela-edicao-produto",
      element: vendedorLogado == 'true' ? <TelaEdicaoProduto setVendedorLogado={setVendedorLogado}/> : <Navigate to='/'/>, 
    },
  ]);
    
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}