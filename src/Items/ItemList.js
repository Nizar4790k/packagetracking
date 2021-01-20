import React from 'react';
import Item from './Item.js';
import items from "../data/data.json";
import "./ItemList.css"

const ItemList = () => {
    
    return (
       
        <div className="container">
            <h1 className=".col-12">Recieved Items</h1>
            <br></br>
            <table className="table table-responsive center .col-12">
                <thead>
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


export default ItemList;
