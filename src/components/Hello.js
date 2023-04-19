import React,{useState,useEffect} from 'react'

function Hello(){
    const [count,SetCount]=useState(0); 
    // useEffect(()=>{document.title=`you click ${count} times`;}
    // );
    document.title=`you click ${count} times`;
    
    return (
    <div>
    <button onClick={()=>{SetCount(count+1)}}>+</button>
    <span>{count}</span>
    
    </div>)
}
export default Hello