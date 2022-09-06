
import React from "react";
import ItemCount from "./ItemCount";

const Item = ({info}) => {

    const onAdd = (quantity) => {
        console.log( `Compraste ${quantity}.` )
    }
 
    return(
        <>
        <div className="card card-menu">
                        <img src={info.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{info.carta}</h5>
                                <p className="card-text text-center">{info.descripción}</p>
                            </div>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
        </>
    )
}


export default Item; 