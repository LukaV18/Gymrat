import React, { useState, useContext} from "react";
import ItemCount from "../componentes/ItemCount";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
        setCart(cart.map(producto => {
            return producto.id === item.id ? {...producto, quantity: producto.quantity + quantity} : producto
        }));
    } else {
        setCart([...cart, {...item,quantity}]);
    }
    }


    const clearCart = () => setCart([]);

        
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    console.log('carrito', cart)


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addProduct,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;