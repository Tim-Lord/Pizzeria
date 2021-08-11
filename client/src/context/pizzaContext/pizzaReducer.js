import { FETCH_PIZZA, ERROR_MESSAGE, LOAD_CART, ORDER_SUCCESS } from '../actions';

const pizzaReducer = (state, action) => {
    switch (action.type) {
        case FETCH_PIZZA:
            return {
                ...state,
                pizzaShop: action.payload,
                loading: false
            }
        case LOAD_CART:
            return {
                ...state,
                cart: [...action.payload],
                loading: false
            }  
        case ORDER_SUCCESS:
            return {
                ...state,
                message: action.payload,
                loading: false
            }      
        case ERROR_MESSAGE:
            return {
                ...state,
                error: '',
                loading: false
            }
        default: 
            return state  
    }
}

export {pizzaReducer}



