import Items from "../Items/Items";
import React from "react";
import { Div, Section } from "./CartStyle";

function Cart({amount,setAmount,cart,setCart}) {

function removeItem(id) {
 cart.map((produto) => {
  if(produto.id === id && produto.quantidade >= 1) {
    console.log(produto)
    produto.quantidade = produto.quantidade -1
    setCart([...cart])
    setAmount(amount - produto.value)
  }
  if (produto.quantidade === 0) {
    const newCart = cart.filter(
      (produtos) => produtos.quantidade !== 0)
      setCart(newCart)
  }
 })
}
    return (
      <Div>
        <h1>Carrinho</h1>
        <Section>
          {cart.map((product) => {
          return (
            <Items 
            key ={product.id} 
            nome={product.name}
            valor={product.value * product.quantidade}
            quantidade={product.quantidade}
            id={product.id}
            removeItem={removeItem}
            />
          )
        })}
        <p>Valor total: R$ {amount.toFixed(2)}</p>
        </Section>
      </Div>
    );
  }
 
  export default Cart;