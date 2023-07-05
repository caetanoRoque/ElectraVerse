import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [clienteLogado, setClienteLogado] = useState(false);
    const [vendedorLogado, setVendedorLogado] = useState(false);

    const logarCliente =    () => {
        setClienteLogado(true)
        localStorage.setItem('clienteLogado',true);
    }
    const deslogarCliente = () => {
        setClienteLogado(false);
        localStorage.setItem('clienteLogado',false);
    }

    const logarVendedor =    () => {
        setVendedorLogado(true)
        localStorage.setItem('vendedorLogado',true);
    }
    const deslogarVendedor = () => {
        setVendedorLogado(false);
        localStorage.setItem('vendedorLogado',false);
    }
    
    return (
        <UsuarioContext.Provider value={{clienteLogado, vendedorLogado, logarCliente, deslogarCliente, logarVendedor, deslogarVendedor}}>
            {children}
        </UsuarioContext.Provider>
    )
}