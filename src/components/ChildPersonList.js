import React from 'react';

function ChildPersonList({person})
{
    return(
        <div>
            <p>My name is {person.name} and I am {person.age} old. I know {person.skill}</p>
        </div>
    )
}
 
  export default ChildPersonList;
