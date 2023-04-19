import React from 'react';

function Practice(){
    //  const [obj,setObj]=useState({firstname:'',lastname:''});
   //  let first;
     return(
        <div>
     Firstname:
     <input type="text" id="fname"></input>
     Lastname:
     <input type="text" id="lname"></input>
     {/* {first=document.getElementById("fname").value} */}
     {/* {console.log(`result=${first}`)} */}
     

     <p id="demo"></p>
     <p id="de"></p>

     {/* {p=} */}
     
     <button onClick={()=>{let f1=document.getElementById("fname").value;let f2=document.getElementById("lname").value;document.getElementById("demo").innerText=`${f1}`;document.getElementById("de").innerText=`${f2}`;}}>submit</button>

     </div>
     )
     

    
}
export default Practice;