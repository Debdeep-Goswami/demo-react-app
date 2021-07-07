import {useState} from 'react'

export default function MyEvent() {

    let bgcolor="red";
    const [bg,setBg]=useState(bgcolor);

    const changeBackground = () =>{
        let newBg="purple";
        setBg(newBg);
    };

    const changeBackground2 = () =>{
        let newBg="cyan";
        setBg(newBg);
    };

    const reset = () =>{
        let newBg="red";
        setBg(newBg);
    };

    const mouseEnter = () =>{
        let newBg="green";
        setBg(newBg);
    };

    const mouseLeave = () =>{
        let newBg="blue";
        setBg(newBg);
    };

    return (
        <div className="eventExample">
            <button style={{backgroundColor:bg , color:'white', padding:'15%'}} 
                onClick={changeBackground} 
                onDoubleClick={changeBackground2} 
                onAuxClick={reset}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >Click to Change BackGround</button>            
        </div>
    );
}
