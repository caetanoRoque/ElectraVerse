import React from 'react'
import ReactDOM from 'react-dom/client'
import TelaLogin from './pages/tela-login/TelaLogin'
import TelaPrincipal from './pages/tela-principal/TelaPrincipal'
import TelaCadastro from './pages/tela-cadastro/TelaCadastro'
import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaLogin/>,
  },
  {
    path: "/tela-principal",
    element: <TelaPrincipal/>,
  },
  {
    path: "/tela-cadastro",
    element: <TelaCadastro/>,
  },
  {
    path: "/tela-edicao-produto",
    element: <TelaEdicaoProduto/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)