
import Navbar from "./componentes/Navbar"
import Data from './componentes/Data';
import Carta from "./container/Carta";

function App() {
  return (
    <>
    <div className="App">
      <header className="">
        <Navbar />
      </header> 
      <div className="fondo-menu col d-flex justify-content-center">
        <Carta items={Data} />
      </div>
    </div>
    </>
  );
}

export default App;
