import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PageLayout from './components/PageLayout/PageLayout';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <div>
      <Header></Header>
      <PageLayout cart={cart} addToCartHandler={addToCart}></PageLayout>
    </div>
  );
}

export default App;
