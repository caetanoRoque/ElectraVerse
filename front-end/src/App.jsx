import {Routes, Route, Navigate} from 'react-router-dom'
import TelaLogin from './pages/tela-login/TelaLogin'
import TelaCadastro from './pages/tela-cadastro/TelaCadastro'
// import TelaEdicaoProduto from './pages/tela-edicao-produto/TelaEdicaoProduto'
import TelaPrincipal from './pages/tela-principal/TelaPrincipal'
import { LoginContext } from './context/LoginContext';
import { useContext, useEffect, useState } from 'react';
import caetano from "./caetano"


export default function App(){

    const {logado, login} = useContext(LoginContext);    
    const [app, setApp] = useState(<></>);

    const espera = async ()=>{
        const verificaLogado = await localStorage.getItem("logado")
        if (verificaLogado){
            login()
        }

        setApp(
            <>
                <Routes > 
                    <Route path='/' element={<TelaPrincipal/>}>
                    <Route path='/tela-principal' element={ verificaLogado ? ( <TelaPrincipal/> ) : (<Navigate to="/login" />) }/>
                    </Route>
                    <Route path='/login' element={<TelaLogin />} />
                    <Route path='/tela-cadastro' element={<TelaCadastro />} />
                    {/* <Route path='/tela-edicao-produto' element={<TelaEdicaoProduto />} /> */}
                </Routes>
            </>
        )
    }

    useEffect(()=>{
        login()
        setTimeout(() => {
            
            console.log(logado)
        }, 1000);
        espera()
    }, [])

    return (
        <>
            {app}
        </>
    )
}