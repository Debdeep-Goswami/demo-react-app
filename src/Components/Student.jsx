import React, {useState,useEffect,useRef} from 'react'
import { useParams, useLocation, useHistory } from 'react-router'
import axios from 'axios'
import DisplayStudent from './DisplayStudent';
import FetchPageData from './FetchPageData'

export default function Student() {
    const {id}=useParams();
    const location =useLocation();
    const history=useHistory();

    const path="/student/".concat(id);

    const [state, setstate] = useState([]);

    var [page,setpage]=useState(1);
    
    const previousPage=usePrevious(page);

    function usePrevious(value) {
        const ref = useRef();
        // Store current value in ref
        useEffect(() => {
          ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
      }

    var offSet = 5;
    

    function resetPage(){
        setpage(1);
    }

    function setNextPage(){
        alert("Next page clicked");
        setpage(prevpage=>prevpage+1);
    }

    function setPreviousPage(){
        alert("Previous page clicked");
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
            <button onClick={()=>{
                resetPage()
                fetchData()
                }
            }>Show Names</button>
            <button onClick={()=>{
                setNextPage()
                fetchData()
                }
            }>Next Page</button>

            <button onClick={()=>{
                setPreviousPage()
                fetchData()
                }
            }>Previous Page</button>
            <br/>
            Current Page = {page}
            <br/>
            Previous Page = {previousPage}
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
/*
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

/*
<FetchPageData
                state={state}
            />
*/