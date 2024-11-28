import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import Cart from './components/Cart'; // Assuming you have a Cart component
import { CartProvider } from './state/CartProvider'; // Assuming you have a CartContext
import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/product/:id" element={<SingleView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
