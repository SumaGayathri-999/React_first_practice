import axios from 'axios';
import React,{useState,useEffect} from 'react';


function FetchData1()
{
    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [buttonid,setButtonId]=useState(1);
     function HandleClick(){
        setButtonId(id);
     }
     useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
         .then(res=>{setPost(res.data)})
     },[buttonid])

    return(
        <div>
            <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={HandleClick}>click</button>
            {post.title}
        </div>
    )


}
export default  FetchData1;