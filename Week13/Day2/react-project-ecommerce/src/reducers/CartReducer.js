import { ADD_ITEM_CART, GET_NUMBERS_CART } from "../actions/Types";

const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    cartItems: [],
    items: {
        goldIphone: {
            name: "Gold iPhone",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        silverIphone: {
            name: "Silver iPhone",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        blueIphone: {
            name: "Blue iPhone",
            price: 1500,
            numbers: 0,
            inCart: false
        },
        graphiteIphone: {
            name: "Graphite iPhone",
            price: 1500,
            numbers: 0,
            inCart: false
        }
    }
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_CART:
            console.log(action.payload)
            let addQuantity = state.items[`${action.payload}`]
            console.log(addQuantity)
            
            return {
                ...state,
                cartNumbers: state.cartNumbers + 1
                // ...state,
                // cartItems: [action.payload]
            }
        case GET_NUMBERS_CART:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducers;