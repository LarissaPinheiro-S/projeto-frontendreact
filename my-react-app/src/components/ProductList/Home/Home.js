import ProductCard from "../ProductCard/ProductCard";
import React, { useState } from "react";
import { CardBox, Container, Header } from "./HomeStyle";


function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart
}) {
  
  const [ordination, setOrdination] = useState("");
  
  function handleSelect (event) {
    setOrdination(event.target.value)
  }

  function addToCart(product) {
    
    const newProduct = cart.find(
      (produtoCallBack) => product.id === produtoCallBack.id
    )
    if (newProduct === undefined) {
      product = {...product, quantidade: 1}
      setCart([...cart, product])
      const totalValue = amount + product.value
      setAmount(totalValue)
    } else {
      const newCart = cart.map((produto) => {
        if(produto.id === newProduct.id) {
          const totalValue = amount + product.value
          setAmount(totalValue)
          return {...newProduct, quantidade: newProduct.quantidade+1}
        }else{
          return produto
        }
      })
      setCart(newCart)
    }
  }console.log("valor total", amount)
    return (
      <>
      <Container>
        <Header>
        <p>Quantidade de produtos:{productList.length}</p>
        <label>Ordenação: 
          <select 
            value={ordination}
            onChange={handleSelect}
            >
            <option value="">Ordenar</option>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>
        </label> 
        </Header>
      
      <CardBox>
        { productList.map((product) => {
          return (
            <ProductCard 
              productList={product} 
              key={product.id}
              addToCart={addToCart}
            />
          )
        })}
      </CardBox>
      </Container>
      </>
    );
  }
  export default Home;