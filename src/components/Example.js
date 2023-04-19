import React from 'react' 
import { useState } from 'react'; 
function Example()  
{ 
const checkitems=["iPhone","Samsung","Oppo","Nokia" ]; 
const [isChecked, setisChecked] = useState([]); 
 
const handleChange=event=>{ 
     const target=event.target ;
     const value=target.value;
    var checkedList = [...isChecked]; 
    if(target.checked){ 
        checkedList=[...isChecked,value] ;
    } 
    else { 
       checkedList.splice(isChecked.indexOf(value), 1); 
      } 
    setisChecked(checkedList); 
 } ;

 
const listItems=checkitems.map((item)=>{ 
  return( 
    <div> 
<input  value={item} type="checkbox" key={item} name="checklist" onChange={handleChange}  /> 
<span>{item}</span>  
</div> 
  ) 
} 
) 
return( 
  <> 
  {listItems}  
 <div>{`My checked items are: ${isChecked}`}</div> 
    </> 
)   
} 
export default Example;

 
