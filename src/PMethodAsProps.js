import React from 'react';
import MethodAsProps from './components/MethodAsProps';

//here a method passes as props
function PMethodAsProps()
{
    function eventHandler(user)
    {
         alert(`button is clicked by ${user}`)
    }
     return (
      <div>
           <MethodAsProps func={eventHandler} />
      </div>
    )
    
  }
  export default PMethodAsProps;
