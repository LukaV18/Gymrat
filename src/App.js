
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./componentes/Cart";

function App() {
  return (
    <>
    <div className="App">
        <Navbar />
      {/* Route Components */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
