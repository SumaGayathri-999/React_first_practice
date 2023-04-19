//here we use Multiple reducers for states that have exactly same state transitons or 
//behaviour to reduce the duplicate code.

import React,{ useReducer} from 'react';
const initialstate=0;
const reducer=(state,action)=>{
    switch(action.type){
        case  "INCREMENT":
            return state+action.value;
        case "DECREMENT":
            return state-action.value;
        default:
             return state;

    }
}
function ReducerExample3(){
    const [countOne,countOneDispatcher]=useReducer(reducer,initialstate);
    const [countFive,countFiveDispatcher]=useReducer(reducer,initialstate);


    return(
        <div>
            <div>count={countOne}</div>
            <button onClick={()=>countOneDispatcher({type:"INCREMENT", value:1})}>increment</button>
            <button onClick={()=>countOneDispatcher({type:"DECREMENT", value:1})}>decrement</button>
            <div>count={countFive}</div>
            <button onClick={()=>countFiveDispatcher({type:"INCREMENT", value:5})}>increment</button>
            <button onClick={()=>countFiveDispatcher({type:"DECREMENT", value:5})}>decrement</button>


        </div>
    )
}
export default ReducerExample3;
