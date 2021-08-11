import React, {createContext, useContext, useReducer, useEffect} from 'react';
import axios from 'axios';

import {pizzaReducer} from './pizzaReducer';
import { FETCH_PIZZA, ERROR_MESSAGE, SUCCESS_MESSAGE, LOAD_CART } from '../actions';

const PizzaContext = createContext();

export const usePizza = () => useContext(PizzaContext);

const PizzaProvider = ({children}) => {

    const initialState = {
        pizzaShop: null,
        cart: [],
        message: '',
        loading: true,
        error: ''
    }

    const [state, dispatch] = useReducer(pizzaReducer, initialState);

    const fetchPizza = async() => {
        try {
            const res = await axios.get('/pizzeria/pizza');
            dispatch({
                type: FETCH_PIZZA,
                payload: res.data
            })
            // console.log(res.data)
        } catch (error) {
            console.error(error.message)
            dispatch({
                type: ERROR_MESSAGE,
                payload: "Server Error. Try again Later"
            })
        }
    }

    const createOrder = async (pizza) => {
        const {id, quantity} = pizza;
        const config = {
            headers: {
                "Content-Type": "Application/json"
            }
        }
        try {
            const res = await axios.post(`/pizzeria/order/${id}`, quantity, config);
            console.log(res.data);
            dispatch({
                type: SUCCESS_MESSAGE,
                payload: "Your order was successfully made..."
            })
        } catch (error) {
            console.log(error.message);
            dispatch({
                type: ERROR_MESSAGE,
                payload: "There was an en error while submitting your order. Try again later..."
            })
        }
    }

    const loadCart = (pizza) => {
        dispatch({
            type: LOAD_CART,
            payload: pizza
        })
    }

    useEffect(() => {
        fetchPizza();
    }, [])

    return (
        <PizzaContext.Provider
            value= {{
                pizzaShop: state.pizzaShop,
                cart: state.cart,
                message: state.message,
                error: state.error,
                loading: state.loading,
                loadCart,
                createOrder
            }}
        >
            {!state.loading && children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;