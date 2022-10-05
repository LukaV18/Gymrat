
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useContext } from "react";
import { useCartContext } from "../context/CartContext";

const MySwal = withReactContent(Swal)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

const Item = (props, {item}) => {

  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    Toast.fire({
        icon: 'success',
        title: `Agregaste ${quantity} unidades al carrito!`
    })
    addProduct(item,quantity);
}
 
    return(
        <>
        <div className="card card-menu sombra-1">
                        <img src={props.img} className="card-img-top card-img-height" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">$ {props.precio}</h5>
                                <p className="card-text">{props.titulo}</p>
                            </div>
                            <ItemCount initial={1} stock={props.stock} onAdd={onAdd} />
        <Link className="detalles-link"  to={`/item/${props.id}`}>
        <div href="#" className="btn btn-secondary btn-compra">Detalles</div>
        </Link>
        </div>
        </>
    )
}


export default Item; 