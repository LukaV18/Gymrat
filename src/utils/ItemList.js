import promise from "./promesa";
import item from "./item";
import { useState } from "react";
import React, {useEffect} from "react";

const ItemList = () => {
    const [products, setProducts] = useState([])

    //componentDidMount
    useEffect(() => {
        //usar la promesa
        promise(item)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        { 
            products.map(item => {
            <>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.precio}</p>
            </>
        })
    }
        </>
        
    )
}

export default ItemList