//Multiple states using wrapping all states as state as an abject



import React,{ useReducer} from 'react';
const initialstate={
    increase_Byone_counter: 0,
    increase_Byfive_counter:5,
};
const reducer=(state,action)=>{
    switch(action.type){
        case  "INCREMENT_1":
            return {...state,increase_Byone_counter:state.increase_Byone_counter+action.value};
        case "DECREMENT_1":
            return {...state,increase_Byone_counter:state.increase_Byone_counter-action.value};
        case  "INCREMENT_5":
                return {...state,increase_Byfive_counter:state.increase_Byfive_counter+action.value};
        case "DECREMENT_5":
                return {...state,increase_Byfive_counter:state.increase_Byfive_counter-action.value};

        default:
             return state;

    }
}
function ReducerExample2(){
    const [count,countDispatcher]=useReducer(reducer,initialstate);

    

    return(
        <div>
            <div>count={count.increase_Byone_counter}</div>
            <button onClick={()=>countDispatcher({type:"INCREMENT_1", value:1})}>increment</button>
            <button onClick={()=>countDispatcher({type:"DECREMENT_1", value:1})}>decrement</button>
            <div>count={count.increase_Byfive_counter}</div>
            <button onClick={()=>countDispatcher({type:"INCREMENT_5", value:5})}>increment</button>
            <button onClick={()=>countDispatcher({type:"DECREMENT_5", value:5})}>decrement</button>




        </div>
    )
}
export default ReducerExample2;
