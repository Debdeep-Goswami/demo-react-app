import React, {useState} from 'react'
import { useParams, useLocation, useHistory } from 'react-router'
import axios from 'axios'
import DisplayStudent from './DisplayStudent';

export default function Student() {
    const {id}=useParams();
    const location =useLocation();
    const history=useHistory();

    const path="/student/".concat(id);

    const [state, setstate] = useState([]);

    var page=1;
    var offSet=5;
    


    function nextPage(){
        alert("Next page clicked");
    }

    function previousPage(){
        alert("Previous page clicked");
    }

    // Using Fetch Function
    const fetchData = async () =>{
        //const url="https://api.github.com/users";
        const url="http://localhost:8080/api/student/";
        //const url = `http://localhost:8080/api/student/${id}`
        
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "pageNumber": `${page}`,
                    "offSet":`${offSet}`
                }
                )
            }
        );
        const data=await response.json();
        setstate(data);
    }

    
    //  Using Axios function
    const fetchDataByAxios = async () =>{
        //const url="https://api.github.com/users";
        //const url="http://localhost:8080/api/student/";
       const url = `http://localhost:8080/api/student/${id}`

        const response = await axios.get(url);

        //console.log(response.data);
        const data=response.data;

        if(data!==null)
            setstate(data);
        else
            alert(`No data found for id ${id}`);

    }

    return (
        <div>
        <h1>This is Student Page {id}</h1>
        {
            location.pathname === path
            ?<>
                <button onClick={fetchDataByAxios}>Show the name of student {id}</button>
                <br/>
                <DisplayStudent
                    key={state.id}
                    firstName={state.firstName}
                    lastName={state.lastName}
                /> 
                <button onClick={()=> history.goBack()}>Go Back</button>
            </>
            :<>
            <button onClick={fetchData}>Show Names</button>
            <button onClick={nextPage}>Next Page</button>
            <button onClick={previousPage}>Previous Page</button>
            {state.map(function(val){
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
            </>
        }           
        </div>
    )
}