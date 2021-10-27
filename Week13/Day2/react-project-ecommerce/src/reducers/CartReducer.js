import { ADD_ITEM_CART, GET_NUMBERS_CART } from "../actions/Types";

const initialState = {
    cartNumbers: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_CART:
            return {
                cartNumbers: state.cartNumbers + 1
            }
        case GET_NUMBERS_CART:
            return{
                ...state
            }
        default:
            return state;
    }
}