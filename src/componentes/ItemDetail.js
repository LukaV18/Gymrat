import React, {useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
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
  timer: 1500,
  timerProgressBar: true
})

function ItemDetail({item, count, stock, quantity}) {
    const [goToCart, setGoToCart] = useState(false)


    const onAdd = (quantity) => {
        setGoToCart(true)
        Toast.fire({
            icon: 'success',
            title: `Agregaste ${quantity} unidades al carrito!`
          })
    }

    return (
        
        <div className= "row detalle-container">
            <div className= "col">
                <img className="detail-image col-image" src={item.img} alt={item.alt} />
            </div>
            <div className="col col-details">
                <div>
                    <div>
                        <h1>{item.titulo}</h1>
                    </div>
                </div>

                <div>
                    <h3 className="detail-text">Detalles</h3>
                    <div>
                        <p>{item.descripcion}</p>
                    </div>
                </div>

                <div>
                    <p>{item.precio}</p>
                    <div>
                        {
                            goToCart
                        ? <Link to="/cart" className="btn btn-secondary btn-agregar-carrito">Terminar la compra</Link> :
                        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                        
                        }
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default ItemDetail; 