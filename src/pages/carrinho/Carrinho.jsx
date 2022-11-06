
import { useContext } from "react"
import { CartContext } from "../../context/Cart"


export const Carrinho = () => {
    
    const {
        addItemCart,
        removeItemCart,
        removeItem,
        clearCart
    } = useContext(CartContext)

    let preco = 0;
}