import React, {useState,useEffect} from 'react'
import { useParams, useLocation, useHistory } from 'react-router'
import axios from 'axios'
import DisplayStudent from './DisplayStudent';
import FetchPageData from './FetchPageData';

export default function Student() {
    const {id}=useParams();
    const location =useLocation();
    const history=useHistory();

    const path="/student/".concat(id);

    const [state, setstate] = useState([]);         //  To control the data fetched from api call

    var [page,setpage]=useState(0);                 //  To control the page number

    var [showButton, setshowbutton]= useState(0);   //  To control showButton's Behavior


    var message="The value of current Page ";
        

    var button1="Show Data from First Page";
    var button2="Next Page";
    var button3="Previous Page";
    
    useEffect(()=>{
        fetchData();
    });

    var offSet = 5;
    
    function resetPage(){
        setshowbutton(1);
        setpage(1);
    }

    function setNextPage(){
        setpage(prevpage=>prevpage+1);
    }

    function setPreviousPage(){
        setpage(prevpage=>prevpage-1);
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
        if(showButton===1)
            setstate(data);
        else
            setstate([]);
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
            <button onClick={()=>{resetPage()}
            }>{button1}</button>

            <button onClick={()=>{setNextPage()}
            }>{button2}</button>

            <button onClick={()=>{setPreviousPage()}
            }>{button3}</button>

            <br/>
            
            <h3>{message} = {page}</h3>
            <br/>
            <FetchPageData
                state={state}
            />
            </>
        }           
        </div>
    )
}

/*
<FetchPageData
                state={state}
            />


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
*/