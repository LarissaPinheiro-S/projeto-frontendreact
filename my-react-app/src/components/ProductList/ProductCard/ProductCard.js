import React from "react";
import {ProductsCard, Card, Button, Imagem} from "./ProductCardStyle";

function ProductCard({productList}) {
  console.log("recebendo as props",productList);
    return (
      <ProductsCard>
        <Imagem src={productList.imageUrl}/>
         <Card>
        <p>{productList.name}</p>
        <value>{productList.value}</value>
        <Button>Adicionar ao carrinho</Button>
        </Card> 
      </ProductsCard>
    );
  }
  export default ProductCard;