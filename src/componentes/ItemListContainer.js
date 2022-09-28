import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import {useEffect} from "react";
import promise from "../utils/promesa";
import { Productos } from "./Data";
import { useParams } from "react-router-dom";
import '../css/loading.scss';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {
    const querydb = getFirestore();
    
    const queryFilter = query(queryCollection)
      const queryCollection = collection(querydb, 'Products' )
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))

    // if (id) {
    //   promise(Productos.filter(item => item.categoryId == id))
    //     .then(result => setProducts(result))
    //     .catch(err => console.log(err))
    // } else {
    //   promise(Productos)
    //     .then(result => setProducts(result))
    //     .catch(err => console.log(err))
    // }
  }, [id])

//diseño del loading cuando iniciamos la pagina.
  return (
        products.length > 0 ? <ItemList item={products}/> :
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
  );
}

export default ItemListContainer;