import React,{ useState,useEffect } from 'react';
import '../cssFolder/corousal.css'

function Corousal(){
    const[slide,setSlide]=useState(0);

    useEffect(()=>{
        const Interval=setInterval(()=>{moveRight();},10000);
        return ()=>{clearInterval(Interval);

       }

    },[slide])
    const images_array=[
        {
            id:1,
            url:"assets/lake.jpg",
            title:"Lake image",
            content:"This is Lake image"
        },
        {
            id:2,
            url:"assets/landscape.jpg",
            title:"Landscape",
            content:"This is Landscape image"
        },
        {
            id:3,
            url:"assets/sunrise.jpg",
            title:"Sunrise",
            content:"This is Sunrise image"
        }
    ]
    function moveRight(){
        slide !== images_array.length-1 ? setSlide(slide+1) : setSlide(0);
    }
    function moveLeft(){
        slide !== 0 ? setSlide(slide-1) : setSlide(images_array.length-1)
    }
    return(
     <div key={slide} className="corousal" >
        {/* when the div re-renders,react only changes its innertext. 
            Adding a key will make react think it's a different div when the key changes,so it will unmount it and mount againthat means react re-renders the  HTML elements whose key changed */}
        <button className="prev arrow_button"  onClick={moveLeft}>&lt;</button>
            <img  className="slide_image tech" src={images_array[slide].url} alt=" " /> 
            <h1>{images_array[slide].title}</h1>
            <p>{images_array[slide].content}</p>


         <button className="next arrow_button "  onClick={moveRight}>&gt;</button>
         <div className="navigation_buttons">
            {images_array.map((image,index)=><div><button className="nav_button" onClick={()=>setSlide(index)}></button></div>)}
         </div>
    </div>
    )
}
export default Corousal;
