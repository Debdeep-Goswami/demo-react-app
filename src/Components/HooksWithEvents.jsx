import React, { useState } from 'react'

export default function HooksWithEvents() {

    let name="";
    const [modified_name,setName]= useState(name);
    const [displayed_name,setDisplayName]= useState(name);


    const getData = (event) =>{
        name=event.target.value;
        setDisplayName(name);
    }
    const getData2 = (event) =>{
        name=event.target.value;
        setName(name);
    }

    const greet = () =>{
        setDisplayName(modified_name);
    }

    return (
        <div className="hooksExample">
            <h1>Hello {displayed_name}</h1>
                <input type="text" placeholder="Enter Your Name" onChange={getData}/>
                <br/>
                <input type="text" placeholder="Enter Your Name" onChange={getData2}/>
                <button onClick={greet}>Submit</button>
        </div>
    )
}
