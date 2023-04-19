import React from 'react';
function Functionclick(){
    function eventHandler()
    {
         console.log("button clicked");
         document.getElementById("btn").innerText="Thanks for Subscribing";
    }
    return (
      <div>
             <h1>hello there</h1>
             <button onClick={eventHandler}>subscribe</button>
             <p id="btn"></p>
             
      </div>
    )
    
  }
  export default Functionclick;
