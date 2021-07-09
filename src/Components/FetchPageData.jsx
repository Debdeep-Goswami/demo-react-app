import React from 'react'
import DisplayStudent from './DisplayStudent';

function FetchPageData(props){
    return(
        <>
        <div>
        {props.state.map(function(val){
            return(
            <>
                <DisplayStudent
                    key={val.id}
                    firstName={val.first_name}
                    lastName={val.last_name}
                /> 
            </>
            );
            }
            )
            }
        </div>
        </>
    );
}
export default FetchPageData;