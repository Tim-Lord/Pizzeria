import React from 'react';

import { usePizza } from '../context/pizzaContext/PizzaProvider';

import { PizzaItem } from './PizzaItem';

const PizzaList = () => {

    const { pizzaShop } = usePizza();
    console.log(pizzaShop)
    return (
        <div className= "Card-container">
            {
                pizzaShop ? 
                    pizzaShop.map(pizza => <PizzaItem key= {pizza.id} pizza= {pizza} />) : 
                    <h3> Pizza is not available at the moment, Check a little later... </h3>
            }
        </div>
    )
}

export {PizzaList}