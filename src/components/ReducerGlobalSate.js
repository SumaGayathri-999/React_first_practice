import React,{ useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const countContext=React.createContext();
const initialstate=0;
const reducer=(state,action)=>{
      switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;

      }
}

function ReducerGlobalSate(){
    const[count,dispatcher]=useReducer(reducer,initialstate);
     return (
        <div>
            <div>HeadComponent count={count}</div>
            <countContext.Provider value={{countstate:count, countDispatcher:dispatcher}}>
            <ComponentA />
            <ComponentB />
            <ComponentC />
            </countContext.Provider>
           
        </div>

     )
}
export default ReducerGlobalSate;