import  React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Item from './item'
import { Link } from 'react-router-dom'
import Productos from './Data'

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


export const ItemCount = ({initial, stock, onAdd, props}) => {
    const [count, setCount] = useState(initial);

    
  //increase counter
    const increase = () => {
    setCount(count => count + 1);
    Toast.fire({
      icon: 'success',
      title: 'Success'
    })
    };

  //decrease counter
    const decrease = () => {
    setCount(count => count - 1);
    Toast.fire({
      icon: 'warning',
      title: 'Warning'
    })
    };

    return (
      <>
        <div className="counter">
              <div className="btncontainer btn-group btn-group-toggle m-0">
                  <button disabled={count >= stock} className=" btn btn-primary btn btn-outline-dark" type="button" onClick={increase}> + </button>
                  <span className=" btn btn-secondary disabled">{count}</span>
                  <button disabled={count <= 1} className=" btn btn-primary btn btn-outline-dark" type="button" onClick={decrease}> - </button>
              </div>
        </div>
        <a href="#" disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-primary btn-compra">Agregar al Carrito</a>
        <Link className="detalles-link"  to={`/item/${props.id}`}>
        <a href="#" className="btn btn-secondary btn-compra">Detalles</a>
        </Link>
      </>
        
    );
}

export default ItemCount;