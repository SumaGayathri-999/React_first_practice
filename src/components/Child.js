
import React,{useState} from 'react';

function Child({val1}){
    const [count,SetCount]=useState(val1);
    const [double,SetDouble]=useState(val1);
    
    
    return(
        <center>
            <button onClick={()=>SetCount(count+1)}>Increment</button>
            <p>{val1} is incremented to {count}</p>
            <button onClick={()=>{SetDouble((prevdouble)=>prevdouble*2)}}>double</button>
            <p>doubled to {double}</p>
        </center>
    )
}
export default Child;