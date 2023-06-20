import React from 'react'
import ReactDOM from 'react-dom/client'
import TelaLogin from './pages/tela-login/TelaLogin'
import TelaPrincipal from './pages/tela-principal/TelaPrincipal'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaLogin/>,
  },
  {
    path: "/tela-principal",
    element: <TelaPrincipal/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)
