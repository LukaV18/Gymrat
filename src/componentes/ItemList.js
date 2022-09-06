import React from "react";
import Item from "./item";


const ItemList = (props) => {

    let item = props.item;

    return (
        <div className="display">
        {item.map((item) => (
            <Item
              key={item.id}
              img={item.img}
              carta={item.carta}
              descripción={item.descripción}
              precio={item.precio}
              stock={item.stock}
              id={item.id}
            />
          ))}
        </div>
    );
}

export default ItemList;