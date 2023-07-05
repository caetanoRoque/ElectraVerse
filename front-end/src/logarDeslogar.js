export function logarCliente(){
    localStorage.setItem('clienteLogado', true);
    localStorage.setItem('vendedorLogado', false);
}
export function deslogarCliente(){
    localStorage.setItem('clienteLogado', false);
}

export function logarVendedor(){
    localStorage.setItem('vendedorLogado', true);
    localStorage.setItem('clienteLogado', false);
}
export function deslogarVendedor(){
    localStorage.setItem('vendedorLogado', false);
}
