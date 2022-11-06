import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [produtoCarrinho, setProdutoCarrinho] = useState([]);

  function adcionandoItem(id, fotolink, nome, valor) {
    const itemObject = [...produtoCarrinho];
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
    setProdutoCarrinho(itemObject);
    
  }

  function removendoItemCarrinho(id) {
    const itemObject = [...produtoCarrinho];
    const item = itemObject.find((produto) => produto.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setProdutoCarrinho(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((produto) => produto.id !== id);
      setProdutoCarrinho(arrayFiltered);
    }
  }

  function removendoItem(id){
    const itemObject = [...produtoCarrinho];

    const arrayFiltered = itemObject.filter((produto)=>produto.id !==id)
    setProdutoCarrinho(arrayFiltered)
  }

  function limpandoCarrinho(){
    setProdutoCarrinho([])
  }

  return (
    <CartContext.Provider
        value={{
            produtoCarrinho,
            adcionandoItem,
            removendoItemCarrinho,
            removendoItem,
            limpandoCarrinho,
        }}>
            {children}
    </CartContext.Provider>
  )
};
