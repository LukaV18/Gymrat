import React from "react";
import Item from "./item";


function ItemList(props) {

  let item = props.item;

//llamado con props al PcListado
  return(
      <main>
      <div className="display item-list justify-content-around">
          {item.map((item) => (
            <Item
              key={item.id}
              img={item.img}
              titulo={item.titulo}
              descripcion={item.descripcion}
              precio={item.precio}
              stock={item.stock}
              id={item.id}
              pesoMaximo={item.pesoMaximo}
              peso={item.peso}
              velocidad={item.velocidad}
              dimenciones={item.dimenciones}
              Posiciones={item.Posiciones}
            />
          ))}
      </div>
      </main>
  );
}


export default ItemList;