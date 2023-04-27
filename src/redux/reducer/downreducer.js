const defaultState = {
    num: 10,
}

const downreducer = (state = defaultState,action) => {
   switch(action.type){
    case 'Down' :
    let up = state.num-1 
    return {...state, num:up}
    case 'Reset_down' :
    return {...state,num:10}
    default:
       return state;
   } 
}
export default downreducer;