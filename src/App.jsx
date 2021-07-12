
import React from 'react'
import "./index.css"

import Menu from './Components/Menu'
import Home from './Components/Home'
import TestComponent from './Components/TestComponent'
import Paragraph_New from './Components/Paragraph'
import {List} from './Components/List'
import Counter from './Components/Counter'
import DigitalClock from "./Components/DigitalClock";
import MyEvent from './Components/MyEvent'
import HooksWithEvents from './Components/HooksWithEvents'
import Student from './Components/Student'
import CreateStudent from './Components/CreateStudent'

//import Error from './Components/Error'

import {Route,Switch,Redirect} from "react-router-dom"

//<Route path="/student/:id" component={Student} exact/>


function App(){
  return(
    <main>
      <Menu/> 
      <Switch>
        <Route path="/" component={Home} exact/>

        <Route path="/home" component={Home} />
        
        <Route path="/paragraph" component={Paragraph_New}/>
        
        <Route path="/list" component={List}/>
        
        <Route path="/test" component={TestComponent} exact/>
        
        <Route path="/counter" component={Counter} exact/>
        
        <Route path="/clock" component={DigitalClock} exact/>
        
        <Route path="/event" component={MyEvent} exact/>
        
        <Route path="/hook" component={HooksWithEvents} exact/>

        <Route path="/student" component={Student} exact/>

        <Route path="/student/create" component={CreateStudent} exact/>
        
        {/*<Route component={Error}/>*/}

        {<Redirect to="/"/>}

      </Switch>
    </main>
  );
}

export default App;
