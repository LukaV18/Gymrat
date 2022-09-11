import React, {useState} from "react";
import ItemCount from "./ItemCount";


function ItemDetail(props) {
    const onAdd = (quantity) => {
        console.log( `Compraste ${quantity}.` )
    }

    return (
        
        <div className= "row detalle-container">
            <div className= "col">
                <img className="detail-image col-image" src={props.item.img} alt={props.item.alt} />
            </div>
            <div className="col col-details">
                <div>
                    <div>
                        <h1>{props.item.titulo}</h1>
                    </div>
                </div>

                <div>
                    <h3>Detalles</h3>
                    <div>
                        <p>{props.item.descripcion}</p>
                    </div>
                </div>

                <div>
                    <p>{props.item.precio}</p>
                    <div>
                        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default ItemDetail; 