import React from 'react'
import { name1, name2, pet } from './MultipleComponent';
import * as Calulator from './Calculator'
import Courses from './Courses'
import CourseData from './CourseData'

export default function Home() {

    const name="Debdeep Goswami";
    const fname="Debdeep";
    const lname="Goswami";
    const currentDate= new Date().toLocaleDateString();
    const currentTime= new Date().toLocaleTimeString();
    const img1="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png";
    const srcs="https://www.google.com/search?q=lorem+ipsum&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitkeGNz8HxAhUpILcAHYU9CdMQ_AUoAXoECAEQAw&biw=1252&bih=573";
    
    const myCSS = {
        color:"blue",
        textTransform:'capitalize'
    }
    
    const greetingCSS ={};
    
    let greeting="";
    const currentHour=new Date().getHours();
    //const currentHour=new Date(2021,7,1,10).getHours();
    
    if(currentHour>1 && currentHour <12){
        greeting="Good Morning";
        greetingCSS.color="green";
    }else if(currentHour>=12 && currentHour <17){
        greeting="Good Afternoon"
        greetingCSS.color="orange";
    }else if(currentHour>=17 && currentHour <21){
        greeting="Good Evening";
        greetingCSS.color="blue";
    }else{
        greeting="Good Night"
        greetingCSS.color="black";
    }

    return (
        <div>
            <h1><span style={greetingCSS}>{greeting}</span> Mr. {name}</h1>
            <p style={myCSS}>This is a Paragraph using inline CSS</p>
            <h2>This is from Node</h2>
            <h3 className="name">{`My first name is ${fname} and my last name is ${lname} This is using External CSS`}</h3>
            <h4>{`5+5 = ${5+5}  `}</h4>
            <p>{`Current date is = ${currentDate}`}</p>
            <p>{`Current time is = ${currentTime}`}</p>

            <a href={srcs} target="_test">
            <img src={img1} alt="One Pic"/>
            </a>
            <p contentEditable>This is an editable paragraph</p>

            <p>First Name is {name1()}</p>
            <p>Last Name is {name2()}</p>
            <p>My Favourite pet is {pet}</p>

            <h1>Calulator</h1>
            <p>10 + 3 = {Calulator.Add(10,3)}</p>
            <p>10 - 3 = {Calulator.Sub(10,3)}</p>
            <p>10 * 3 = {Calulator.Mul(10,3)}</p>
            <p>10 / 3 = {Calulator.Div(10,3)}</p>


            {CourseData.map(function(val){
            return(
            <>
                <Courses
                    key={val.id} 
                    title={val.courseName} 
                    goto={val.courseLink}
                />
            </>
            );
            }
            )
            }
        </div>
    )
}
