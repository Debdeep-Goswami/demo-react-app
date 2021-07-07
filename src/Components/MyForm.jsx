import React from 'react'

export default function MyForm() {

    const submit = (event) =>{
    }

    const inputEvent = () =>{

    }
    return (
        <div className="hooksExample">
            <form onSubmit={submit}>
            <h1>Please Enter Your Details</h1>
                <input type="text" 
                name="name"
                placeholder="Enter Your Name" 
                onChange={inputEvent}/>

                <br/>
                
                <input type="text" 
                name="password"
                placeholder="Enter Your Password"
                onChange={inputEvent}/>
                
                <input type="submit">Submit</input>

            </form>
            
        </div>
    )
}
