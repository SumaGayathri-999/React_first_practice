import React,{ useContext } from 'react';
import {countContext} from './ReducerGlobalSate';

function ComponentA(){
    const countContext1=useContext(countContext);
    return(
        <div>
            <div>ComponentA count={countContext1.countstate}</div>
            <button onClick={()=>countContext1.countDispatcher({type:"INCREMENT"})}>increment</button>
            <button onClick={()=>countContext1.countDispatcher({type:"DECREMENT"})}>decrement</button>

        </div>
    )
}
export default ComponentA;