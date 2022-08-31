import { React, useState } from 'react'
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


const ItemCount = () => {
    const [counter, setCounter] = useState(1);

  //increase counter
    const increase = () => {
    setCounter(count => count + 1);
    Toast.fire({
      icon: 'success',
      title: 'Success'
    })
    };

  //decrease counter
    const decrease = () => {
    setCounter(count => count - 1);
    Toast.fire({
      icon: 'warning',
      title: 'Warning'
    })
    };

    return (
        <div className="counter">
            <div className="btncontainer btn-group btn-group-toggle">
                <button className="controlbtn btn btn-primary btn btn-outline-dark" type="button" onClick={increase}> + </button>
                <span className="counteroutput btn btn-secondary btn-lg disabled">{counter}</span>
                <button className="controlbtn btn btn-primary btn btn-outline-dark" type="button" onClick={decrease}> - </button>
            </div>
        </div>
    );
}

export default ItemCount;