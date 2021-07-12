import React,{useState} from 'react'
export default function CreateStudent() {
    
    var [id, setid] = useState("");
    var [firstName, setfirstName] = useState("");
    var [lastName, setlastName] = useState("");


    const getId = (event) =>{
        id=event.target.value;
        setid(id);
    }
    const getFirstName = (event) =>{
        firstName=event.target.value;
        setfirstName(firstName);
    }
    const getlastName = (event) =>{
        lastName=event.target.value;
        setlastName(lastName);
    }
    
    const validate = () =>{
        if(id==="" || firstName==="" || lastName ==="")
            alert("Please fill all the details");
        else
            addDetails();
    }
    const addDetails = async () =>{

        const url = `http://localhost:8080/api/student/create`;

        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": `${id}`,
                    "firstName": `${firstName}`,
                    "lastName":`${lastName}`
                }
                )
            }
        );
        //const data=await response.json();
        //alert(response.status);
        if(response.status===200)
            alert("Student Created Successfully");
        else
            alert("Cannot be created");
        
    }

    return (
        <div>
            <label for="Id" >ID </label>
            <input type="text" id="id" name="id" onChange={getId}/>
            <br/>
            <label for="firstName" >First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={getFirstName}/>
            <br/>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" onChange={getlastName}/>
            <br/>
            <button name="Submit" onClick={validate}>Submit</button>

        </div>
    );
}
