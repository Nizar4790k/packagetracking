import React, { useState,useEffect } from 'react';
import Item from './Item.js';

import "./ItemList.css"
import axios from 'axios';

const ItemList = () => {
    
   const [items,setItems] = useState([]); //setState

    const getItems = async() =>{

        await axios.get("http://localhost:4000/packages/jsanchez")
    .then(response=>setItems(response.data))

    }



   //ComponentDitMount
    useEffect(()=>{
        getItems();
        
    },[])

    return (
       
        <div className="container">
            <h1 className=".col-12">Recieved Items</h1>
            <br></br>
            <table className="table table-responsive center .col-12 table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">description</th>
                        <th scope="col">weight</th>
                        <th scope="col">supplier</th>
                        <th scope="col">priceToPay</th>
                        <th scope="col">supplier</th>
                        <th scope="col">courier</th>
                        <th scope="col">courierTracking</th>
                        <th scope="col">description</th>
                        <th scope="col">internalTracking</th>
                        <th scope="col">priceToPay</th>
                        <th scope="col">supplier</th>
                        <th scope="col">weight</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item,i)=>{
                    
                    return  <Item key={i} item={item} id={i}/>
                })}
                </tbody>

            </table>

        </div>

    );

}


async function getItems() {

  
    await axios.get("http://localhost:4000/packages/jsanchez")
    .then(response)
  
   
    
    
      
  
  }


export default ItemList;
