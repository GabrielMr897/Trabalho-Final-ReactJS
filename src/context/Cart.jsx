import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [produtoCart, setProdutoCart] = useState();

  function addItemCart(id, fotolink, nome, valor) {
    const itemObject = [...produtoCart];
    const item = itemObject.find((produto) => produto.id === id);
    if (!item) {
      itemObject.push({
        id: id,
        fotoLink:fotolink,
        nome: nome,
        valor: valor,
        quantidade: 1,
      });
    } else {
      item.quantidade = item.quantidade + 1;
    }
    setProdutoCart(itemObject);
  }

  function removeItemCart(id) {
    const itemObject = [...produtoCart];
    const item = itemObject.find((produto) => produto.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setProdutoCart(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((produto) => produto.id !== id);
      setProdutoCart(arrayFiltered);
    }
  }

  function removeItem(id){
    const itemObject = [...produtoCart]

    const arrayFiltered = itemObject.filter((produto)=>produto.id !==id)
    setProdutoCart(arrayFiltered)
  }

  function clearCart(){
    setProdutoCart([])
  }

  return (
    <CartContext.Provider
        value={{
            produtoCart,
            addItemCart,
            removeItemCart,
            removeItem,
            clearCart,
        }}>
            {children}
    </CartContext.Provider>
  )
};
