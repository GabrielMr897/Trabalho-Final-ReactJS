
import { useContext } from "react"
import { CartContext } from "../../context/Cart"
import "./carrinho.css"


export const Carrinho = () => {
    
    const {
        adcionandoItem,
        removendoItemCarrinho,
        removendoItem,
        limpandoCarrinho,
        produtoCarrinho
    } = useContext(CartContext)

    let precoTotal = 0;

    return (
        <>
      <section className='itens-carrinho'>
        <div className='container d_flex'>

          <div className='detalhes-carrinho'>
            {produtoCarrinho.length === 0 && <h1 className='no-items product'>não há itens no carrinho</h1>}

               {produtoCarrinho.length !== 0 && <button className="trash">
                <i className="fa fa-trash icon-circle" onClick={() => limpandoCarrinho()}></i>
                </button>}
           
            {produtoCarrinho.map((produto) => {
              const produtopreco = produto.valor * produto.quantidade
              precoTotal += produtopreco

              return (
                
                <div className='lista-carrinho product d_flex' key={produto.id}>
                  <div className='img'>
                    <img src={produto.fotoLink} alt='' />
                  </div>
                  <div className='detalhes-carrinho'>
                    <h3>{produto.nome}</h3>
                    <h4>
                      <span>Quantidade: {produto.quantidade} </span>
                      <span>Valor: R${produtopreco.toFixed(2)}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function' key={produto.id}>
                    <div className='removeCart'>
                      <button className='removendoC' onClick={() => 
                        removendoItem(produto.id)
                      }>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    <div className='controleCarrinho d_flex'>
                      <button className='incCarrinho' onClick={() => adcionandoItem(
                        produto.id,
                        produto.fotoLink,
                        produto.nome,
                        produto.valor
                      )}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCarrinho' onClick={() => removendoItemCarrinho(produto.id)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='total-carrinho product'>
            <h2>Resumo de todo o carrinho</h2>
            <div className=' d_flex'>
              <h4>Preço total do pedido: </h4>
              <h3>R${precoTotal.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}