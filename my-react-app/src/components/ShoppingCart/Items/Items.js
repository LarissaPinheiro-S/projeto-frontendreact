import React from "react";
import { Div, Button, Section} from "./ItemsStyle";

function Items() {
    return (
      <Div>
      <h1>Carrinho</h1>
      <Section>
        <p>Produto:</p>
       <Button>remover</Button>
      </Section>
       <p>Valor total: 0</p>
      </Div>
    );
  }
  
  export default Items;