import Menu from "../../assets/menu.svg"  
import "./tela-principal.css"
import Search from "../../assets/search.svg" 
import Cart from "../../assets/cart.svg" 

export default function TelaPrincipal(){
    return(
        <div className="tela-principal">
          <header>
            <div className="menu"><img src={Menu} width="40px" alt="" /></div>
            <div className="barraPesquisa">
              <input type="text" />
              <button><img src={Search} width="30px" alt="" /></button>
            </div>
            <div className="carrinho"><img src={Cart} width="40px" alt="" /></div>
          </header>

          <section>
                <div className="produtos">
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                    <div>
                        {/* <Produto/> */}
                    </div>
                </div>
          </section>
        </div>
    )
}