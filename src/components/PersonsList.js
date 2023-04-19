import React from 'react';
import ChildPersonList from './ChildPersonList';


function PersonList()
{
   const persons=[
    {
    id:1,
    name:"josh",
    age:27,
    skill:"HTML"
   },
   {
    id:2,
    name:"kevin",
    age:25,
    skill:"css"
   },
   {
    id:3,
    name:"resh",
    age:40,
    skill:"java"
   },
   {
    id:4,
    name:"nick",
    age:18,
    skill:"C languge"
   },
   {
   id:5,
   name:"krish",
    age:28,
    skill:"Python"
   }
]
const process_array1=(persons).map((person)=><ChildPersonList key={person.id} person={person}  />);
const process_array2=(persons).map((person,index)=><ChildPersonList key={index} person={person}  />);

// const process_array1=(persons).map((person)=><div key={person.name}>my name is {person.name}</div>);





return(
    <div>
        <h3>Below one is using list id as a key</h3>
        {process_array1}
        <h3>Below one is using index as a key</h3>
        {process_array2}
    </div>

    // <div>
    //     {process_array1}   
    // </div>
)
}
 
  export default PersonList;
