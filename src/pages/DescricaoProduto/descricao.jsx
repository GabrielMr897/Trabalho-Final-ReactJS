import { useState } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../service/api.js";
export const Descricao = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProductById = () => {
    const produto = api.find((desc) => desc.id == id);
    setProduct(produto);
  };
  console.log(product);

  return (
    <div>
      <h1>{product.nome}</h1>
      <button onClick={() => getProductById()}>Olá</button>
    </div>
  );
};



