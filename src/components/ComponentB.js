import React,{ useContext } from 'react';
import {countContext} from './ReducerGlobalSate';

function ComponentB(){
    const countContext1=useContext(countContext);
    return(
        <div>
            <div>ComponentB count={countContext1.countstate}</div>
            <button onClick={()=>countContext1.countDispatcher({type:"INCREMENT"})}>increment</button>
            <button onClick={()=>countContext1.countDispatcher({type:"DECREMENT"})}>decrement</button>

        </div>
    )
}
export default ComponentB;