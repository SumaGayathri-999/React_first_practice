

import React,{ useReducer} from 'react';
const initialstate={
    initialcount: 0
};
const reducer=(state,action)=>{
    switch(action.type){
        case  "INCREMENT":
            return {initialcount:state.initialcount+1};
        case "DECREMENT":
            return {initialcount:state.initialcount-1};
        default:
             return state;

    }
}
function ReducerExample(){
    const [count,countDispatcher]=useReducer(reducer,initialstate);

    return(
        <div>
            <div>count={count.initialcount}</div>
            <button onClick={()=>countDispatcher({type:"INCREMENT"})}>increment</button>
            <button onClick={()=>countDispatcher({type:"DECREMENT"})}>decrement</button>

        </div>
    )
}
export default ReducerExample;
