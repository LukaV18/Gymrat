import React from "react";
import Item from "./item";


function ItemList(props) {

  let item = props.item;

//llamado con props al PcListado
  return(
      <div className="display d-flex justify-content-around">
          {item.map((item) => (
            <Item
              key={item.id}
              img={item.img}
              titulo={item.titulo}
              descripcion={item.descripcion}
              precio={item.precio}
              stock={item.stock}
              id={item.id}
            />
          ))}
      </div>
  );
}


export default ItemList;