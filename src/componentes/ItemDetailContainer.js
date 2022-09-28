import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import promise from "../utils/promesa";
import { Productos } from "./Data";
import { useParams } from "react-router-dom";
import '../css/loading.scss';
import { getFirestore, doc, getDoc} from 'firebase/firestore'

function ItemDetailContainer() {
  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams();
  
  useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'Products', "1" )
      getDoc(queryDoc)
        .then(res => setOneProduct({id: res.id, ...res.data()}))
  }, [])
  
  
//diseño del loading cuando haces   click en un producto.
  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
    <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
  )
}

export default ItemDetailContainer;