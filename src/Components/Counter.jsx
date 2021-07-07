import { useState } from "react";

const Counter = () =>{

    const [count, setCount] = useState(0)
    const IncNum=()=> setCount(count+1);
    const DecNum=()=> setCount(count-1);
    const Reset=()=> setCount(0);

    let message="___________";
    if(count>0)
        message="Positive Value";
    else if(count<0)
        message="Negative Value";
    else
        message="___________";

    return (
        <>
            <div className="hooksExample">
                <h1>{count}</h1>
                <h3>{message}</h3>
                <button onClick={IncNum}>Increment</button>
                <button onClick={DecNum}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    );

}



export default Counter;