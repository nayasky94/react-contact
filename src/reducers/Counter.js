import * as types from '../actions/ActionTypes'

const initState = {
    number: 0
};

export default function counter(state = initState, action){
    console.log("counter");
    switch(action.type){
        case types.INCREMENT :
            return {...state, number: state.number + 1};
        case types.DECREMENT : 
            return {...state, number: state.number - 1};
        default :
            return state;
    }
}