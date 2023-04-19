//This example shows two way data binding.the input fields will be empty after submitting the values 
//By gathereing the input values in an object and logged into the console.

import React,{ useState } from 'react';
import '../cssFolder/LoginForm.css'

function LocalStorage()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   

    function changeName(username)
    {
        setName(username)
    }
    function changeEmail(useremail)
    {
        setEmail(useremail)
    }
    function changePassword(userpassword)
    {
        setPassword(userpassword)
    }
    function submitHandler(event){
        event.preventDefault();
        console.log("hello");
        let userinfo_obj={
            username:name,
            useemail:email,
            userpassword:password,

        }
        console.log(userinfo_obj);
        setName("");
        setEmail("");
        setPassword("");

        
    }
   
    
    return (
        <div className="card">
        <form >
                <label>Name:
                    <input type="text" value={name} onChange={(e)=>changeName(e.target.value)}></input><br />
                </label>

                <label>Email:
                <input type="email" value={email} onChange={(e)=>changeEmail(e.target.value)}></input><br />
                </label>

                <label>Password:
                <input type="password" value={password} onChange={(e)=>changePassword(e.target.value)}></input><br/>
                </label>
                <button className="loginbutton" onClick={submitHandler}>Login</button>
            </form> 
        </div>
    )
}

export default  LocalStorage;