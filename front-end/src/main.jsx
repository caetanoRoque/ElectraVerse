import React from 'react'
import ReactDOM from 'react-dom/client'
// import TelaLogin from './pages/tela-login/TelaLogin'
// import TelaPrincipal from './pages/tela-principal/TelaPrincipal'
// import TelaCadastro from './pages/tela-cadastro/TelaCadastro'
// import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto'
import './index.css'
// import {createBrowserRouter,RouterProvider,BrowserRouter} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import App from './App'
import { LoginProvider } from './context/LoginContext';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TelaLogin/>,
//   },
//   {
//     path: "/tela-principal",
//     element: <TelaPrincipal/>,
//   },
//   {
//     path: "/tela-cadastro",
//     element: <TelaCadastro/>,
//   },
//   {
//     path: "/tela-edicao-produto",
//     element: <TelaEdicaoProduto/>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <LoginProvider> 
        <App />
      </LoginProvider>
    </BrowserRouter>

    {/* <RouterProvider router={router} /> */}
  </React.Fragment>
)