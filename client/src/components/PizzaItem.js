import React from 'react'

const PizzaItem = ({pizza}) => {
    return (
        <div className= "Card">
            <div className= "card-item-container">
                <h2> {pizza.name} </h2>
                <br />
                <hr />
                <br />
                <h3> {pizza.price} </h3>
            </div>
            <button className= "btn"> Add to cart </button>
        </div>
    )
}

export {PizzaItem}