import React from "react";
import { Container } from "./home.js";

import { Header } from "../../components/header/Header.jsx"

import  "./Home.css"

import { Slide } from "./Slide.jsx"



import { Produtos } from "./Produtos.jsx"

export const Home = () => {
  return (
    <>
      <Header/>
      <Slide/>
      <Produtos/>
    </>
  );
};
