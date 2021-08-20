import * as types from '../actions/ActionTypes';

const initState = {
    color:[255,255,255]
}

export default function ui(state = initState, action){
    console.log("ui");
    if(action.type === types.SET_COLOR){
        return {...state, color: action.color};
    }else{
        return state;
    }
}