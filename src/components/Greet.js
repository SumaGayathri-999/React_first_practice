import React from 'react';
function Greet(props){
    return (
      <div>
             <h3>{props.name} works as {props.jobName}</h3>
             {props.children}
             
      </div>
    )
    
  }
  export default Greet;
