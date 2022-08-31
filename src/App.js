
import Navbar from "./componentes/Navbar"
import ItemListContainer from './componentes/ItemListContainer';
import Data from './componentes/Data';

function App() {
  return (
    <>
    <div className="App">
      <header className="">
        <Navbar />
      </header> 
      <div className="fondo-menu col d-flex justify-content-center">
        {
          Data.map(item => (
            <ItemListContainer
            img={item.img}
            carta={item.carta}
            descripción={item.descripción}
            precio={item.precio}
            />
          ))
        }
      </div>
    </div>
    </>
  );
}

export default App;
