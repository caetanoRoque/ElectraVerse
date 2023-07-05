import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { UsuarioProvider } from './context/UsuarioContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UsuarioProvider>
      <App/>
    </UsuarioProvider>
)