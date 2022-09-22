import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from "@fortawesome/free-brands-svg-icons"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
const {totalProducts} = useCartContext()
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="carrito-info">{totalProducts() || ''}</span>
        </>
        
    )
}

export default CartWidget