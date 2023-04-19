import React,{ useState,useEffect } from 'react';
import axios from 'axios';

function FetchData2(){
         const[post,setPost]=useState({})
         const[isloading,setIsLoading]=useState(true);
         const[error,setError]=useState('');
         const[id,setId]=useState(1);
         const[buttonid,setButtonId]=useState(1);
         

         useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
            .then(response=>{
                setPost(response.data);
                setIsLoading(false);
                setError('');
            })
            .catch(error=>{setError("something went wrong");
                     setIsLoading(false);
                     setPost('');
                     console.log(error);
                })
         },[buttonid]);
      

         function HandleClick(){
            setIsLoading(true);
            setButtonId(id);
         }

      return(
        <div>
              <input type="text" value={id} onChange={(event)=>{setId(event.target.value)}} />
              <button type="button" onClick={HandleClick}>click</button>
              {isloading ? <p style={{color:"blue"}}>Loading....</p> : <h1>{post.title}</h1>  } 
              <p style={{color:"red"}}>{error}</p>       
        </div>
      )
}
export default FetchData2;