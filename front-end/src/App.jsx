import TelaLogin from './pages/tela-login/TelaLogin'
import TelaClienteProdutos from './pages/tela-cliente-produtos/TelaClienteProdutos'
import TelaCadastro from './pages/tela-cadastro/TelaCadastro'
import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto'

import {createBrowserRouter,redirect,RouterProvider,} from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UsuarioContext } from './context/UsuarioContext';

export default function App(){
    const {clienteLogado,logarCliente, vendedorLogado, logarVendedor} = useContext(UsuarioContext);

    useEffect(()=>{
        if(localStorage.clienteLogado){
            logarCliente();
        }
        else if(localStorage.vendedorLogado){
            logarVendedor();
        }
        
    },[])

    const isLogin = () => {
        if(localStorage.clienteLogado == "true")  return <TelaClienteProdutos/>
        if(localStorage.vendedorLogado == "true") return <TelaEdicaoProduto/>

        return <TelaLogin/>, console.log('aaa')
    }

    const router = createBrowserRouter([
        {
            path: "*",
            element: isLogin()
        },
        {
          path: "/",
          element: isLogin(),
        },
        {
          path: "/tela-cliente-produtos",
          element: clienteLogado ? <TelaClienteProdutos/> : <TelaLogin/>,
        },
        {
          path: "/tela-cadastro",
          element: <TelaCadastro/>,
        },
        {
          path: "/tela-edicao-produto",
          element: true ? <TelaEdicaoProduto/> : <TelaLogin/>, 
        },
      ]);
    
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}