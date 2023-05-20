import './App.css';
import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import { createGlobalStyle } from 'styled-components'

function App() {

  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
  return (
    <div className="App">
      <GlobalStyle />
      <Filters/>
      <Home/>
      <Cart/>
    </div>
  );
}

export default App;
