import { addDoc, getFirestore, collection, doc, updateDoc, increment } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 7000,
  timerProgressBar: true
})



const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    const order = {
        buyer: {
            name: 'Luka',
            email: 'Santi@gmail.com',
            phone: '123123',
            address: 'asdd'
        },
        items: cart.map(product => ({ id: product.id, title: product.titulo, price: product.precio, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(result => {
            Toast.fire({
                icon: 'success',
                title: `¡su orden de compra fue creada con éxito!
                ${result.id}`
            })
            //a la hora de hacer la compra final, se actualice el stock:
        cart.forEach(async(product) => {
            const itemRef = doc(db, "Products", product.id);
            await updateDoc(itemRef, {
                stock: increment(-product.quantity)
            });
        })
        
        //a la hora de hacer la compra final, se borra el carrito:
        clearCart()
        })
        .catch(err => console.log(err))
    }
    

    if (cart.length === 0) {
        return (
            <div>
                <p className="carrito-vacio">No hay elementos en el carrito</p>
                <Link to="/" className="btn btn-primary carrito-vacio-btn">Volver al catálogo 🛒</Link>
            </div>
        );
    }

    return (
        
        <div className="carrito-container">

        <div className="carrito-precio-total">
            <h2>
                PRECIO TOTAL: ${totalPrice()}
            </h2>
            <button class="btn btn-success emitirCompra" onClick={handleClick}>Emitir Compra</button>
            
        </div>
        <button class="btn btn-danger vaciarCarrito" onClick={clearCart}>Vaciar Carrito</button>

        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        </div>
    )
}

export default Cart;