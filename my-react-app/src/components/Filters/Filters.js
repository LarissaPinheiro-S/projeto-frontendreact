import { productList } from "../../assents/productsList";
import ProductCard from "../ProductList/ProductCard/ProductCard";
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
      alert("Não pagamos para vender")
      setMinFilter(0)
    }else{
      setMinFilter(event.target.value)
    }
  }

  function handleMaxFilter(event) {
    if(event.target.value < 0) {
      alert("Não pagamos para vender")
      setMaxFilter(0)
    }else{
      setMaxFilter(event.target.value)
    }
  }

  function handleSearchFilter(event) {
    setSearchFilter(event.target.value)
  }

    return (
      
      <Div>
      <FiltersDiv>
       <h2>Filtro</h2>
      <label>
        Valor mínimo:
      <InputField
        type="number"
        placeholder="Valor mínimo"
        value={minFilter}
        onChange={handleMinFilter}
      />
      </label>

      <label>
        Valor máximo:
      <InputField
        type="number"
        placeholder="Valor máximo"
        value={maxFilter}
        onChange={handleMaxFilter}
      />
      </label>

      <label>
          Busca por nome:
        <InputField
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