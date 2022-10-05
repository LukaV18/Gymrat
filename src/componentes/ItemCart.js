import React from "react";
import { useCartContext } from "../context/CartContext";


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()
    
    return(
        <div className="ItemCart sombra-1 card-menu">
            <img className="cart-img" src={product.img}></img>
            <div className="cart-details">
                <p>{product.titulo}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u. ${product.precio}</p>
                <p className="cart-subtotal">Subtotal: ${product.quantity * product.precio}</p>
                <div className="btn btn-secondary btn-compra btn-compra-carrito" onClick={() => removeProduct(product.id)}>REMOVER</div>
            </div>
        </div>
    )
}

export default ItemCart