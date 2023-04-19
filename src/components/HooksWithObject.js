import React,{useState} from 'react';

function Hooks(){
   const[name,setName]=useState({firstname:'',lastname:''});
   
   return(
    <center>
       firstname:
       <input type="text" value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}></input>,
       lastname:
       <input type="text" value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}></input>
       <p>firstname:{name.firstname}</p>
       <p>lastname:{name.lastname}</p>

    </center>
   )
}
export default Hooks;