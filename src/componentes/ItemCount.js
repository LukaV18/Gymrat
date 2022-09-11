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


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    
  //increase counter
    const increase = () => {
    setCount(count => count + 1);
   
    };

  //decrease counter
    const decrease = () => {
    setCount(count => count - 1);
    
    };

    


    return (
      
      <div className='d-flex contador-comprar'>
        <div className="counter full boder">
              <div className="btncontainer btn-group btn-group-toggle m-0">
                  <button disabled={count >= stock} className="contadores" type="button" onClick={increase}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg></button>
                  <p className="contador-medio">{count}</p>
                  <button disabled={count <= 1} className="contadores" type="button" onClick={decrease}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg>
                  </button>
              </div>
        </div>
        <a href="#" disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-danger btn-agregar-carrito">Agregar al Carrito</a>
      </div>
       
    );
}

export default ItemCount;