import React from "react";
import { useCartContext } from "../context/CartContext";


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()
    return(
        <div className="ItemCart">
            <img src={product.img}></img>
            <div>
                <p>Titulo: {product.titulo}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart