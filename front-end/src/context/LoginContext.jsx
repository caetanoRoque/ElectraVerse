import { createContext, useState } from "react"

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [clienteLogado, setClienteLogado] = useState(false);
    const [vendedorLogado, setVendedorLogado] = useState(false);
    const [tentandoLogar, setTentandoLogar] = useState(true);

    const logarCliente =     () => setClienteLogado(true);
    const logarVendedor =    () => setVendedorLogado(true);

    const deslogarCliente =  () => setClienteLogado(false);
    const deslogarVendedor = () => setVendedorLogado(false);

    return (
        <LoginContext.Provider value={{
            clienteLogado,
            vendedorLogado,
            logarCliente,
            logarVendedor,
            deslogarCliente,
            deslogarVendedor,
            tentandoLogar,
            setTentandoLogar,
            
        }}>{children}</LoginContext.Provider>
    )
}