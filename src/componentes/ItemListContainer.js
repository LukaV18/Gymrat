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
  const {categoryId} = useParams();
  

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Products' )

    if (categoryId) {
      const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
  }, [categoryId])

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