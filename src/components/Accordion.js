import React,{ useState} from 'react';
import '../cssFolder/Accordian.css';

function Accordion(){
   
    const data_obj=[
        {
        header:"What is my return policy",
        content:"You may return undamaged items 30 days after purchase for a full refund of your product"
        },
        {
        header:"How do I track my order",
        content:"you can track the order in the my orders page"
        },
        {
        header:"Can I purchase items again",
        content:"Yes you can purchase item again"
        }
    ];
    return(
        <div className="card">
            {
              data_obj.map((data)=><Structure data={data} />)
            }
        </div>
    )
}

// I applied this below function for every object data in the array

function Structure({data}){
    const [choice,setChoice]=useState(false);
     return(
        <div className="Accordion_card">
                <div className="Accordion_title" onClick={()=>setChoice(!choice)}>
                    <div>{data.header}</div>
                    {choice ? <div>-</div> : <div>+</div>}
                </div >
                {choice ? <div className="Accordion_content">{data.content}</div> :""}
        </div>
     )
}
export default Accordion;