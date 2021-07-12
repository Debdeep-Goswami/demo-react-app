import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" className="menu_item" to="/home">Home</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/paragraph">Paragraph</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item"to="/list">List</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/test">Test</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/counter">Counter</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/clock">Clock</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/event">Event</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/hook">Hook</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/student">Student</NavLink>
            <NavLink exact activeClassName="active_class" className="menu_item" to="/student/create">Create Student</NavLink>
        </div>
    )
}
