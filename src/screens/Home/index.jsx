import { useEffect, useState } from 'react'

import axios from '../../service/api.js'

export const Home = () => {

  const[produto, setProduto] = useState();

  useEffect(() => {
    axios.get("/produto/1").then((resp) => setProduto(resp.data)).catch((err) => {
        console.error("vagabundo!" + err);
      });
  }, []);

  return (
    <>
      <h1 key={produto.id}> {produto?.nome} </h1>
    </>
  );
};
