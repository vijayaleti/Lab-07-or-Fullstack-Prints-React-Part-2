import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import Cart from './components/Cart'; // Assuming you have a Cart component
import { CartProvider } from './state/CartProvider'; // Assuming you have a CartContext
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/product/:id" element={<SingleView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
