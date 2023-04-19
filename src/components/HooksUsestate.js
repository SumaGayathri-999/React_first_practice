//Example forhow to use usestate hook 

import React,{useState} from 'react';

function HooksUsestate()
{
const [count,SetCount]=useState(0);
const [double,SetDouble]=useState(2);



return (
<div>
<button onClick={()=>{SetCount(count+1)}}>+</button>
<span>{count}</span>
<button onClick={()=>SetCount(count-1)}>-</button>
<p>Result={count}</p>
<button onClick={()=>SetDouble(double+double)}>Double</button>
<span>{double}</span>
</div>)
}
export default HooksUsestate;