import React from 'react'

function Courses(props){
    return(
        <>
        <div className="course">
           <h1>{props.title}</h1>
            <a href={props.goto} target="_blank" rel="noreferrer">
                <button>Goto Course</button>
            </a>
        </div>
        </>
    );
}

export default Courses;