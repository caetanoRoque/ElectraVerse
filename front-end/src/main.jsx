import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import TelaLogin from './pages/tela-login/TelaLogin'
import TelaClienteProdutos from './pages/tela-cliente-produtos/TelaClienteProdutos';
import TelaCadastro from './pages/tela-cadastro/TelaCadastro';
import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto';
import TelaAdicionarProduto from './pages/tela-adicionar-produto/TelaAdicionarProduto'
import TelaCarrinho from './pages/tela-carrinho/TelaCarrinho'
import TelaFinalizacaoCompra from './pages/tela-finalizacao-compra/TelaFinalizacaoCompra'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider } from './context/LoginContext.jsx'

const router = createBrowserRouter([
  {
      path: "*",
      element: <p style={{color:'#fff'}}>Página não encontrada</p>,
  },
  {
    path: '/',
    element: <App/>,
    children: [
        {
          path: "/",
          element: <TelaLogin/>,
        },
        {
          path: "/tela-cliente-produtos",
          element: <TelaClienteProdutos/>,
        },
        {
          path: "/tela-cadastro",
          element: <TelaCadastro/>,
        },
        {
          path: "/tela-edicao-produto",
          element: <TelaEdicaoProduto/>, 
        },
        {
          path: "/tela-adicionar-produto",
          element: <TelaAdicionarProduto/>, 
        },
        {
          path: "/tela-carrinho",
          element: <TelaCarrinho/>, 
        },
        {
          path: "/tela-finalizacao-compra",
          element: <TelaFinalizacaoCompra/>, 
        },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginProvider>
    <RouterProvider router={router}/>
  </LoginProvider>
)