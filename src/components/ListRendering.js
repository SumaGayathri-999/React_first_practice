import React from 'react';

function ListRendering()
{
    // const array=[{id:1,text:"Santu"},{id:2,text:"Asha"},{id:3,text:"kalyani"},{id:1,text:"kameshwari"}];
    const transformed_array=array.map((friend)=><div><h1>Hii {friend}</h1><p>you are my bestie</p></div>);
    // const transformed_array=array.map((friend)=><div><h1>Hii {friend.text}</h1><li key={friend.id}><input type="checkbox" />hii there</li></div>);


    return(
        <div>
            {transformed_array}
        </div>
    )
}
 
  export default ListRendering;
