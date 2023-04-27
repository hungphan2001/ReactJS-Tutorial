const defaultState = {
    num: 0,
}

const upreducer = (state = defaultState,action) => {
   switch(action.type){
    case 'Up' :
    let up = state.num+1 
    return {...state, num:up}
    case 'Reset' :
    return {...state,num:0}
    default:
       return state;
   } 
}
export default upreducer;