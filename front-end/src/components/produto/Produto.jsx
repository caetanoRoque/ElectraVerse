export default function Produto(p){
    return(
        <div className="produto">
            <figure>
                <img src={p?.imagem}/>
            </figure>
            
            <div className="info">
                <p className="nome">{p?.nome}</p>
                <p className="preco">{p?.preco}</p>
            </div>

            <div></div>
            <p className="estoque">{p?.nome}</p>
            <p className="categoria">{p?.nome}</p>
            <p className="descricao">{p?.nome}</p>
        </div>
    )
}

// nome, preco, estoque, categoria, descircao, imagem