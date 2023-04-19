import React,{useState} from 'react';
import '../App.css'

function Hooks(){
   const[count,setCount]=useState(0);
   const [value,setDouble]=useState(100);
   return(
    <center>
        <button onClick={()=>{setCount((prevcount)=>prevcount+1)}}>Increment</button>
        <p>you clicked {count}</p>
        <button onClick={()=>{setDouble((prevdouble)=>prevdouble*2)}}>Double</button>
        <p>Doubled to {value}</p>
    </center>
   )
}
export default Hooks;