import React from 'react';
import Item from './Item.js';
import items from "../data/data.json";


const ItemList = () => {
    
    return (
       
        <div>
            <table className="table">
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
