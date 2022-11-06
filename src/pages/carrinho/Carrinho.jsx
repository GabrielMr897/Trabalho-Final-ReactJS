
import { useContext } from "react"
import { CartContext } from "../../context/Cart"


export const Carrinho = () => {
    
    const {
        addItemCart,
        removeItemCart,
        removeItem,
        clearCart,
        produtoCart
    } = useContext(CartContext)

    let preco = 0;

    return (
        <>
        {produtoCart?.map((prod) => {
            return <h1>{prod.nome}</h1>
        })
        
        }
        </>
    )
}