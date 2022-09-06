import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import {useEffect} from "react";
import promise from "../utils/promesa";
import Productos from "./Data";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const onAdd = (quantity) => {
        console.log( `Compraste ${quantity}.` )
    }
    
    //componentDidMount
    useEffect(() => {
        //usar la promesa
        promise(Productos)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    
    return ( <>
        
                <ItemList data={data}/>
            </>
                                
    )
}

export default ItemListContainer