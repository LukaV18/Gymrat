import React, {useState} from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = (props) => {
    return (
        <div className= "container">
            <div className= "detail">
                <img className="detail-image" src={props.item.img} alt="" />
                <div className="content">
                    <h1>{props.item.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 