import React,{useState} from  'react'
import '../CheckList.css'

function MyCheckList(){
    const [mobiles,setMobiles]=useState([
        {id:1,text:"Iphone", done:false},
        {id:2,text:"Samsung", done:false},
        {id:3,text:"Oppo", done:false},
        {id:4,text:"Nokia", done:false}
      ]);

     function HandleCheck(mobile){
         const updatedTodos = mobiles.map((t) =>
         t.id === mobile.id
            ? {
               ...t,
               done: !t.done,
             }
           : t
       );
         setMobiles(updatedTodos);
      }

     return(
        <center>
              <h1>My CheckList </h1>
              {mobiles.map((mobile)=><div><input type="checkbox" onChange={()=>HandleCheck(mobile)} /><span style={{textDecoration: mobile.done ? "line-through" : ""}}>{mobile.text}</span></div>)}
              My checked items are: {mobiles.map((mobile)=>mobile.done?<span>{mobile.text},  </span>:"")}
        </center>
     )
}
export default MyCheckList;