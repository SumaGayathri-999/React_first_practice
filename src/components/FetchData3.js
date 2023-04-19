
//This example is used to fetchdata using useReducer with useEffect.here we can upade the relatedd states at one point.
//for ex: For FETCH_SUCCESS we have to set a Couple of related states anf for FETCH_FAILED we have toset another related state transitions.

import React,{ useReducer,useEffect } from 'react'
import axios from 'axios';

const initialstate={
    post:"",
    error:"",
    loading:true
}
 function reducer(state,action){
      switch(action.type){
        case "FETCH_SUCCESS":
            return {...state,post:action.payload,loading:false}
        case "FETCH_FAILED":
            return {...state,post:"",error:"something went wrong"}
        default:
            return state;
      }
 }


function FetchData3(){
     const[state,depatcher]=useReducer(reducer,initialstate);

     useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>{
            depatcher({type:"FETCH_SUCCESS",payload:response.data})
        })
        .catch(error=>{
            depatcher({type:"FETCH_FAILED"})

            })
     });

     return(
        <div>
              {state.loading ? <p>loading....</p> : <h1>{state.post.title}</h1>}
        </div>
     )
}

export default  FetchData3;