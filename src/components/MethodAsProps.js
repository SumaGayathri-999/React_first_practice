// paasing a parameter to the parant componenet function that is only done by arrow functions
import React from 'react';
function MethodAsProps(props){
    function hello(user){
        alert(`HII REY from ${user}`);
    }
    return (
      <div>
        <h1>click the below button</h1>
        <button onClick={props.func}>click me</button>
        <button onClick={()=>props.func("suma")}>another</button>  
        <button onClick={()=>hello('suma')}>normal one</button>
      </div>
    )
    
  }
  export default MethodAsProps;
