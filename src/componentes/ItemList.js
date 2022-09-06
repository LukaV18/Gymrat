import React from "react";
import Item from "./item";


const ItemList = ({data = []}) => {
    return (
        <div className="display">
        {
        data.map(producto => <Item key={producto.id} info={producto}/>)
        }
        </div>
    );
}

export default ItemList;