import React,{useState,useEffect} from 'react'

function ToggleSwitch(){
    const [light,SetLight]=useState(false);
    const [switchType,SetSwitchType]=useState("on");


 
    
    useEffect(()=>{
        if(light)
        {
         SetSwitchType("off");
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        }
        else{
            SetSwitchType("on");
            document.body.style.backgroundColor="white";
            document.body.style.color="black";


        }
    },[light,switchType])
    return (
    <center>
    <h1>click the button to switch {switchType} the light</h1>
    <button onClick={()=>{SetLight(!light)} }>click</button>

    
    </center>)
}
export default ToggleSwitch;