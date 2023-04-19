import React,{ useEffect, useState } from 'react';
import '../cssFolder/LoginForm.css'

function LoginForm1()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [formvalid,setFormvalid]=useState(false);
    const [formError,setFormError]=useState({});
    const [isLogged,setisLogged]=useState(false);
    // useEffect(()=>{
    //     if(Object.keys(formError).length === 0 && isSubmit){
    //         setFormvalid(true);
    //     }
    //     const interval=setInterval(()=>{
    //         if(!email.includes("@"))
    //         {
    //             setFormError({email:"error"});
    //         }
    //     },3000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[formError,name,email,password]);
    useEffect(()=>{
        if(formvalid===true){
            localStorage.setItem("isLoggedIn","1");
        }
    },[formvalid]);
    useEffect(()=>{
        if(localStorage.getItem("isLoggedIn")=== "1"){
            setisLogged(true);
        }
    },[])
   
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
         const error=Validate(name,email,password);
        if(Object.keys(error).length === 0){
            setFormvalid(true);
            setisLogged(true);
        }
        else{
            setFormError(error);
        }
        
        // setFormError(Validate(name,email,password));
    }
    function Validate(name,email,password)
    {
        const error={};
        console.log("eeeyy");
        if(name===""){
          error.username="you have to fill your name"

        }
        if(email===""){
            error.email="you have to fill your email";
          }
          if(password===""){
            error.password="you have to fill your password";
          }
          return error;

    }
    function HandleLogout(){
        localStorage.removeItem("isLoggedIn");
        setisLogged(false);
    }
    return (
        <div className="card">
            {!isLogged && <form >
                <label>Name:
                    <input type="text" value={name} onChange={(e)=>changeName(e.target.value)}></input><br />
                </label>
                <p>{formError.username}</p>

                <label>Email:
                <input type="email" value={email} onChange={(e)=>changeEmail(e.target.value)}></input><br />
                </label>
                <p>{formError.email}</p>

                <label>Password:
                <input type="password" value={password} onChange={(e)=>changePassword(e.target.value)}></input><br/>
                </label>
                <p>{formError.password}</p>
                <button className="loginbutton" onClick={submitHandler}>Login</button>
            </form> }
                       {isLogged && <Homepage username={name} HandleLogout={HandleLogout}/>}
        </div>
    )
}
function Homepage({username,HandleLogout})
{
     return (
        <div>
            <h1>Welcome {username} !</h1>
            <button onClick={HandleLogout}>logout</button>
        </div>
     )
}
export default LoginForm1;