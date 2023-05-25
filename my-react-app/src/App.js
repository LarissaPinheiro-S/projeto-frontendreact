import './App.css';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import {productList} from './assents/productsList';
import { AppContainer } from './appStyle';
import { GlobalStyle } from './globalStyle';
import { useState } from 'react';

function App() {
const [cart, setCart] = useState ("");
const [amount, setAmount] = useState("");
const [minFilter, SetMinFilter] = useState("");
const [maxFilter, setMaxFilter] = useState("");
const [searchFilter, setSearchFilter] = useState("");

  return (
    <AppContainer>
      <GlobalStyle />
      <Filters/>
      <Home productList = {productList}/>
      <Cart/>
    </AppContainer>
  );
}
export default App;
