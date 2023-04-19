import React,{useState} from 'react'
 
function SearchItems(){
    const[filterText,setfilterText]=useState("");
    const arr=['Banana','Apple','Orange','Mango','Pinapple','Watermelon']
    return(
        <center>
            <Search filterText={filterText} onTextChange={setfilterText}/>
            <Filteredlist arr={arr} filterText={filterText} />
        </center>
    )
}
function Search({filterText,onTextChange}){
      return(
        <div>
            <label>Search:</label>
            <input type='search' value={filterText} onChange={(e)=>onTextChange(e.target.value) } />
        </div>
      )
}
function Filteredlist({arr,filterText}){
    
    const filtered=arr.filter(
        (text)=>{
           
            if(text.toLowerCase().includes(filterText.toLowerCase()))
                   {
                    return text;
                   }
        }

    )
    const filtered_array=filtered.map((element)=><div><p>{element}</p></div>);

    return(
        <center>
            {filtered_array }
        </center>
    )

}

export default SearchItems;