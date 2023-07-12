import './produto-carrinho.css'
import { useState } from 'react'

export default function ProdutoCarrinho({produto, setProdutos}) {
    const [estoqueNumero, setEstoqueNumero] = useState(1)

    const deletarProduto = () => {
        let carrinho = JSON.parse(localStorage.carrinho)

        for (let c in carrinho) {
            if (carrinho[c].id_produto == {produto, setProdutos}.produto.id_produto) {
                carrinho.splice(c, 1)
            }
        }
        localStorage.setItem('carrinho', JSON.stringify(carrinho))

        if (carrinho.length == 0) {
            localStorage.removeItem('carrinho');
        }
        setProdutos(carrinho)
    }

    const diminuirNumero = () => {
        if (estoqueNumero > 0) {
            setEstoqueNumero(estoqueNumero - 1)

            let carrinho = JSON.parse(localStorage.carrinho);
            carrinho = carrinho.map(produto => {
                if(produto.id_produto == {produto, setProdutos}.produto.id_produto){
                    produto.estoqueSelecionado = estoqueNumero-1;
                }
                return produto
            })

            console.log(carrinho)

            localStorage.setItem('carrinho',JSON.stringify(carrinho))
        }
    }

    const aumentarNumero = () => {
        if (estoqueNumero < Number({produto, setProdutos}.produto.estoque)) {
            setEstoqueNumero(estoqueNumero + 1)

            let carrinho = JSON.parse(localStorage.carrinho);
            carrinho = carrinho.map(produto => {
                if(produto.id_produto == {produto, setProdutos}.produto.id_produto){
                    produto.estoqueSelecionado = estoqueNumero+1;
                }
                return produto
            })

            localStorage.setItem('carrinho',JSON.stringify(carrinho))
        }
    }

    return (
        <div className='produto-carrinho'>
            <button className='remover' onClick={() => deletarProduto()}>X</button>

            <p className="estoque">{{produto, setProdutos}?.produto.estoque} un</p>
            <article>
                <figure>
                    <img src={{produto, setProdutos}?.produto.imagem} alt="" />
                </figure>
                <div className="info">
                    <p>{{produto, setProdutos}?.produto.nome}</p>
                    <label>R$ {Number(produto.preco)?.toFixed(2).toString().replace('.',',')}</label>
                </div>
            </article>
            <div className="mudarEstoque">
                <button className='menos' onClick={() => diminuirNumero()}>-</button>
                {estoqueNumero}
                <button className='mais' onClick={() => aumentarNumero()}>+</button>
            </div>


        </div>
    )
}