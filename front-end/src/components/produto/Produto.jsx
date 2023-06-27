import "./produto.css"

export default function Produto(p){

    console.log(p.produto)
    return(
        <div className="produto">
            
            <p className="estoque">{p.produto.estoque} un</p>

            <article>
                <figure>
                    <img src={p.produto.imagem} alt="" />
                </figure>
                <div className="info">
                    <p>{p.produto.nome}</p>
                    <label>R$ {p.produto.preco?.replace('.',',')}</label>
                </div>
                
            </article>
            
            <div className="comprar">
                <button>COMPRAR</button>
            </div>

        </div>
    )
}