
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
    <div className="App">
      <header className="">
        <Navbar />
      </header> 
      <div className="fondo-menu col d-flex justify-content-center">
        <ItemListContainer/>
      </div>
    </div>
    </>
  );
}

export default App;
