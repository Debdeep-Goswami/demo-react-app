import React from 'react'

function DisplayStudent(props){
    return(
        <>
        <div>
           <h2>{props.firstName} {props.lastName}</h2>
        </div>
        </>
    );
}
export default DisplayStudent;