import React from 'react';
import '../cssFolder/HomePage.css'

function Homepage({username,HandleLogout})
{
     return (
        <div> 
            <div className="welcome">
            <h1>Welcome {username} !</h1>
            <button onClick={HandleLogout}>logout</button>

            </div>
        </div>
     )
}
export default Homepage;