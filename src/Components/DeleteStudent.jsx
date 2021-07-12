import React,{useState} from 'react'

export default function DeleteStudent() {

    var [id, setid] = useState(0);

    const getid = (event) =>{
        id=event.target.value;
        setid(id);
    }

    const validate = () =>{
        if(id==="")
            alert("Kindly provide the id of the student");
        else
            deleteDetails();
    }

    const deleteDetails = async () =>{

        const url = `http://localhost:8080/api/student/delete/${id}`;

        const response = await fetch(
            url,{
                method: 'DELETE',
            }
        );
        //const data=await response.json();
        //alert(response.status);
        if(response.status===200)
            alert("Student Deleted Successfully");
        else
            alert("Cannot be deleted");
        
    }


    return (
        <div>
            <label for="id" >Enter the ID to delete </label>
            <input type="text" id="id" name="id" onChange={getid}/>

            <button name="Submit" onClick={validate}>Delete</button>
        </div>
    )
}
