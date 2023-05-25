import './App.css';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import {productList} from './assents/productsList';
import { AppContainer } from './appStyle';
import { GlobalStyle } from './globalStyle';

function App() {


console.log(productList)
  return (
    
    <AppContainer>
      <GlobalStyle />
      <Filters productList = {productList}/>
      <Home productList = {productList}/>
      <Cart/>
    </AppContainer>
  );
}
export default App;
