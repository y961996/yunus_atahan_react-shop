import * as actionTypes from '../redux/ActionTypes';
import InitialState from "./InitialState";

function addItemToCartReducer(state = InitialState.cartItems, action){
    switch(action.type){
        case actionTypes.ADD_ITEM_TO_CART:
            return action.payload;
        default:
            return state;
    }
}

const exportedFunctions = {
    addItemToCartReducer
}

export default exportedFunctions;