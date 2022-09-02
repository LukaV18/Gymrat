import Data from "../componentes/Data";
import ItemListContainer from "../componentes/ItemListContainer"

const Carta = (props) => {

    return(
        <>
        {
            props.items.map(item => (
              <ItemListContainer
              key={item.id}
              img={item.img}
              carta={item.carta}
              descripción={item.descripción}
              precio={item.precio}
              />
            ))
          }
        </>
    )
}


export default Carta; 