import React, {createContext, useContext, useReducer, useEffect} from 'react';
import axios from 'axios';

import {pizzaReducer} from './pizzaReducer';
import { FETCH_PIZZA, FETCHING_ERROR } from '../actions';

const PizzaContext = createContext();

export const usePizza = () => useContext(PizzaContext);

const PizzaProvider = ({children}) => {

    const initialState = {
        pizzaShop: null,
        loading: true
    }

    const [state, dispatch] = useReducer(pizzaReducer, initialState);

    const fetchPizza = async() => {
        try {
            const res = await axios.get('/pizzeria/pizza');
            dispatch({
                type: FETCH_PIZZA,
                payload: res.data
            })
            console.log(res.data)
        } catch (error) {
            console.error(error.message)
            dispatch({
                type: FETCHING_ERROR,
                payload: "Server Error"
            })
        }
    }

    // const createOrder = async () => {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    useEffect(() => {
        fetchPizza();
    }, [])

    return (
        <PizzaContext.Provider
            value= {{
                pizzaShop: state.pizzaShop,
                loading: state.loading
            }}
        >
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;