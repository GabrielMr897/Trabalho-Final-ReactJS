import React from "react";
import { Home } from "./components/mainpage/Home.jsx";
import Global from "./styles/global";
import "./App.css"
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import axios from "./service/api.js"



import { Header } from "./components/header/Header.jsx" 

function App() {

  const[produto, setProduto] = useState();

  useEffect(() => {
    axios.get("/produto/1").then((resp) => setProduto(resp.data)).catch((err) => {
        console.error("vagabundo!" + err);
      });
  }, []);


  return (
    <>
    <Router>
      <Header/>
    </Router>
    </>
  );
}

export default App;
