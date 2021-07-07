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
    
    // Using Fetch Function
    const fetchData = async () =>{
        //const url="https://api.github.com/users";
        //const url="http://localhost:8080/api/student/";
        const url = `http://localhost:8080/api/student/${id}`
        
        const response = await fetch(url);
        const data=await response.json();
        console.log("Resp[onse",response);
        
        //console.log(data);
        if(data!==null)
            setstate(data);
        else
            alert(`No data found for id ${id}`);
    }

    
    //  Using Axios function
    const fetchDataByAxios = async () =>{
        //const url="https://api.github.com/users";
        const url="http://localhost:8080/api/student/";
       //const url = `http://localhost:8080/api/student/${id}`

        const response = await axios.get(url);

        //console.log(response.data);
        setstate(response.data);

    }

    return (
        <div>
        <h1>This is Student Page {id}</h1>
        {
            location.pathname === path
            ?<>
                <button onClick={fetchData}>Show the name of student {id}</button>
                <br/>
                <DisplayStudent
                    key={state.id}
                    firstName={state.firstName}
                    lastName={state.lastName}
                /> 
                <button onClick={()=> history.goBack()}>Go Back</button>
            </>
            :<>
            <button onClick={fetchDataByAxios}>Show Names of all Students</button>
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
