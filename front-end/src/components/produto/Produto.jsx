import "./produto.css"

export default function Produto(p){

    console.log(p.produto)
    return(
        <div className="produto">
            <figure>
                <img src={p.produto?.imagem}/>
            </figure>
            
            <div className="info">
                <p className="nome">{p.produto?.nome}</p>
                <p className="preco">{p.produto?.preco}</p>
            </div>

            <p className="estoque">{p.produto?.estoque}</p>
            <p className="categoria">{p.produto?.categoria}</p>
            <p className="descricao">{p.produto?.descricao}</p>
        </div>
    )
}