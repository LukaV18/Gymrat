
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {

    const onAdd = (quantity) => {
        console.log( `Compraste ${quantity}.` )
    }
 
    return(
        <>
        <div className="card card-menu">
                        <img src={props.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{props.titulo}</h5>
                                <p className="card-text text-center">{props.descripcion}</p>
                            </div>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <Link className="detalles-link"  to={`/item/${props.id}`}>
        <div href="#" className="btn btn-secondary btn-compra">Detalles</div>
        </Link>
        </div>
        </>
    )
}


export default Item; 