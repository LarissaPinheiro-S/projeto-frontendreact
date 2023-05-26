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
       
        <h3>{nome}</h3>
       <CartContainer>
        <p>Valor: {valor}</p>
        <p>Quantidade: {quantidade}</p>
       <Button onClick={() => removeItem(id)}>Remover</Button>
      </CartContainer>
       
      </div>
    );
  }
  export default Items;