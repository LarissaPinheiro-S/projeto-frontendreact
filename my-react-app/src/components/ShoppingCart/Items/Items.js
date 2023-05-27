import React from "react";
import {Button, CartContainer} from "./ItemsStyle";

function Items({
  nome, 
  valor, 
  quantidade, 
  id, 
  removeItem}) {

    return (
      <div>
       
        <h4>{nome}</h4>
       <CartContainer>
        <p>Valor: {valor}</p>
        <p>Quantidade: {quantidade}</p>
       
      </CartContainer>
       <Button onClick={() => removeItem(id)}>Remover</Button>
      </div>
    );
  }
  export default Items;