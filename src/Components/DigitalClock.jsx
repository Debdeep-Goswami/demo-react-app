import { useState } from "react";

export default function DigitalClock() {

    let time=new Date().toLocaleTimeString();
    const [currentTime, setTime]=useState(time);

    const UpdateTime = () =>{
        time=new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(UpdateTime,1000);
    return (
        <div style={{padding:'15%'}}className="hooksExample">
            <h1>{currentTime}</h1>            
        </div>
    )
}

