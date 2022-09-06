
import React from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {

    const onAdd = (quantity) => {
        console.log( `Compraste ${quantity}.` )
    }
 
    return(
        <>
        <div className="card card-menu">
                        <img src={props.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{props.carta}</h5>
                                <p className="card-text text-center">{props.descripción}</p>
                            </div>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
        </>
    )
}


export default Item; 