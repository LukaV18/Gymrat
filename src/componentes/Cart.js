import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Agregar productos</Link>
            </>
        );
    }

    return (
        
        <div className="carrito-container">

        <div className="carrito-precio-total">
            <h2>
                PRECIO TOTAL: ${totalPrice()}
            </h2>
        </div>

        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }

        </div>
    )
}

export default Cart;