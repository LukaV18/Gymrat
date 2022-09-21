import React from "react";
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./componentes/Cart";
import CartProvider from "./context/CartContext";



function App() {
  return (
    <>
    <div className="App">
        <CartProvider>
          <Navbar />
        {/* Route Components */}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
    </div>
    </>
  );
}

export default App;
