import './App.css';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import {productList} from './assents/productsList';
import { AppContainer } from './appStyle';
import { GlobalStyle } from './globalStyle';
import { useState } from 'react';

function App() {
const [cart, setCart] = useState ([]);
const [amount, setAmount] = useState(0);
const [minFilter, SetMinFilter] = useState(0);
const [maxFilter, setMaxFilter] = useState(0);
const [searchFilter, setSearchFilter] = useState("");

  return (
    <AppContainer>
      <GlobalStyle />
      <Filters 
      minFilter={minFilter} 
      setMinFilter = {SetMinFilter}
      maxFilter = {maxFilter}
      setMaxFilter = {setMaxFilter}
      searchFilter = {searchFilter}
      setSearchFilter = {setSearchFilter}
      />
      <Home 
      productList = {productList}
      amount = {amount}
      setAmount = {setAmount}
      cart = {cart}
      setCart = {setCart}
      />
      <Cart
      amount = {amount}
      setAmount = {setAmount}
      cart = {cart}
      setCart = {setCart}
      />
    </AppContainer>
  );
}
export default App;
