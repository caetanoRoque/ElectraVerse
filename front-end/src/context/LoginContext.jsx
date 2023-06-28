import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [logado, setLogado] = useState(true)
    const navigate = useNavigate()

    const login = () => {
        localStorage.setItem("logado", "true");
        setLogado(true);
    }

    const logout = () => {
        localStorage.removeItem("logado")
        setLogado(false)
        return navigate("/login")
    }

    // useEffect(()=>{
    //     const verificaLogado = localStorage.getItem("logado")
    //     console.log("verifica ", verificaLogado)
    //     if (verificaLogado){
    //         setLogado(true)
    //     }
    // }, [])
    
    return(
        <LoginContext.Provider value={{logado, login, logout}}>
            {children}
        </LoginContext.Provider>

    )
} 