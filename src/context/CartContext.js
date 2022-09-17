import React, { useState, useContext} from "react";
import ItemCount from "../componentes/ItemCount";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: newQuantity})
        setCart(newCart)
    }


    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
        
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    console.log('carrito', cart)


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;