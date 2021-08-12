import React from 'react';

import { usePizza } from '../context/pizzaContext/PizzaProvider';

const PizzaItem = ({pizza}) => {

    const { loadCart } = usePizza();

    const handleClick = () => loadCart(pizza);

    return (
        <div className= "Card">
            <div className= "card-item-container">
                <h2> {pizza.name} </h2>
                <br />
                <hr />
                <br />
                <h3> {pizza.price} </h3>
            </div>
            <button 
                className= "btn"
                onClick= {handleClick}
            > 
                Add to cart 
            </button>
        </div>
    )
}

export {PizzaItem}