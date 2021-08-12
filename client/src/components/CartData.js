import React, {useState} from 'react'

const CartData = ({ pizza }) => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => setQuantity(e.target.value);

    const {name, price} = pizza;

    const amount = price * parseInt(quantity);

    return (
        <tr>
            <td> {name} </td>
            <td> {price} </td>
            <td> 
                <input 
                    type= 'number' 
                    value= {quantity}
                    onChange= {handleQuantity}
                /> 
            </td>
            <td> {amount} </td>
        </tr>
    )
}

export {CartData}