
import { useContext } from "react"
import { CartContext } from "../../context/Cart"


export const Carrinho = () => {
    
    const {
        adcionandoItem,
        removendoItemCarrinho,
        removendoItem,
        limpandoCarrinho,
        produtoCarrinho
    } = useContext(CartContext)

    let preco = 0;

    return (
        <>
        {produtoCarrinho?.map((prod) => {
            return <h1>{prod.nome}</h1>
        })
        
        }
        </>
    )
}