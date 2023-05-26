import { FiltersDiv } from "./FiltersStyle";
import { InputField, Div} from "./FiltersStyle";
import React from "react";

function Filters({
  minFilter, 
  setMinFilter,
  maxFilter, 
  setMaxFilter,
  searchFilter, 
  setSearchFilter,
}) {
  function handleMinFilter(event) {
    if(event.target.value < 0) {
      alert("Digite um valor positivo")
      setMinFilter(0)
    }else{
      setMinFilter(event.target.value)
    }
    
  }

  function handleMaxFilter(event) {
    if(event.target.value < 0) {
      alert("Digite um valor positivo")
      setMaxFilter(0)
    }else{
      setMaxFilter(event.target.value)
    }
  }

  function handleSearchFilter(event) {
    setSearchFilter(event.target.value)
  }
  console.log(searchFilter)
    return (
      <Div>
      <FiltersDiv>
       <h2>Filtro</h2>
      <label>
        Valor mínimo:
      <input
        type="number"
        placeholder="Valor mínimo"
        value={minFilter}
        onChange={handleMinFilter}
      />
      </label>

      <label>
        Valor máximo:
      <input
        type="number"
        placeholder="Valor máximo"
        value={maxFilter}
        onChange={handleMaxFilter}
      />
      </label>

      <label>
          Busca por nome:
        <input
          type="text"
          placeholder="Busca por nome"
          value ={searchFilter}
          onChange={handleSearchFilter}
      />
      </label>
      </FiltersDiv>
     </Div>
    );
  }
  export default Filters;