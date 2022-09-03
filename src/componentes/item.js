
import React from "react";
import ItemCount from "./ItemCount";
const Item = ({info}) => {

    return(
        <>
        <div className="card card-menu">
                        <img src={info.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{info.carta}</h5>
                                <p className="card-text text-center">{info.descripción}</p>
                                <a href="#" className="btn btn-primary btn-compra">{info.precio}</a>
                                <a href="#" className="btn btn-secondary btn-compra">Detalles</a>
                            </div>
                            <ItemCount />
        </div>
        </>
    )
}


export default Item; 