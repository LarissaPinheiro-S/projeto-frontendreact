import { FiltersDiv } from "./FiltersStyle";
import { InputField, Container, Div} from "./FiltersStyle";
import React from "react";

function Filters() {
    return (
      <Div>
      <FiltersDiv>
       <h1>Filtro</h1>
      <label>Valor mínimo:</label>
      <InputField
        type="number"
        placeholder="Valor mínimo" 
      />
      <label>Valor máximo:</label>
      <InputField
        type="number"
        placeholder="Valor máximo"
      />
        <label>Busca por nome:</label>
      <InputField
        type="text"
        placeholder="Busca por nome"
      />
      </FiltersDiv>

      <Container>
         <p>Quantidade de produtos: 9</p>

        <div>
        <label>Ordenação:</label> 
       <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
        </div>
      </Container>
     </Div>
    );
  }
  export default Filters;