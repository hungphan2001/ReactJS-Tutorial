import { createStore } from "redux";

const defaultState = {
    num: 0,
}

const reducer = (state = defaultState,action) => {
   switch(action.type){
    case 'GET NUMBER' : return{...defaultState,num:Math.round(Math.random() * 10)}
    case 'GET RESET' : return {...defaultState,num:0}
    default:
       return state;
   } 
}

const store = createStore(reducer);
export default store;