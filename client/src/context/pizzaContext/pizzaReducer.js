import { FETCH_PIZZA, FETCHING_ERROR } from '../actions';

const pizzaReducer = (state, action) => {
    switch (action.type) {
        case FETCH_PIZZA:
            return {
                ...state,
                pizzaShop: action.payload,
                loading: false
            }
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false
            }
        default: 
            return state  
    }
}

export {pizzaReducer}



