import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import { CardBox, Container, Header } from "./HomeStyle";


function Home({productList}) {
    return (
      <>
      <Container>
        <Header>
        <p>Quantidade de produtos:{productList.length}</p>
        
        <label>Ordenação: 
           <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
        </label> 
      
        </Header>
      
      <CardBox>
     <ProductCard productList={productList[0]}/>
     <ProductCard productList={productList[1]}/>
     <ProductCard productList={productList[2]}/>
      </CardBox>
      </Container>
      </>
    );
  }
  export default Home;