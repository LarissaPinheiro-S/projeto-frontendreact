import React from "react";
import {ProductsCard, Card, Button, Imagem} from "./ProductCardStyle";

function ProductCard({productList, addToCart}) {
  
    return (
      <ProductsCard>
        <Imagem src={productList.imageUrl}/>
         <Card>
        <p>{productList.name}</p>
        <value>{productList.value}</value>
        <Button onClick={() => addToCart(productList)}>Adicionar ao carrinho</Button>
        </Card> 
      </ProductsCard>
    );
  }
  export default ProductCard;