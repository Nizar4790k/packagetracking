import React from 'react';

const Item = (props) => {

      const  {item,id} = props;

    return (
        
        <tr>
            <td><b>{id}</b></td>
            <td>{item.description}</td>
            <td>{item.weight}</td>
            <td>{item.supplier}</td>
            <td>{item.priceToPay}</td>
            <td>{item.supplier}</td>
            <td>{item.courier}</td>
            <td>{item.courierTracking}</td>
            <td>{item.description}</td>
            <td>{item.internalTracking}</td>
            <td>{item.priceToPay}</td>
            <td>{item.supplier}</td>
            <td>{item.weight}</td>

        </tr>
        
        
    );
}

export default Item;