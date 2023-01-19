import React from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio"
import Resume from "./Resume";
import { NavLink } from 'react-router-dom'

function Navigation(props) {
    return (
        <div>
            <NavLink path='/About' component={About}>About</NavLink>
            <NavLink path="/Project" component={Portfolio}>Projects</NavLink>
            <NavLink path="/Contact" component={Contact}>Contact</NavLink>
            <NavLink path="/Resume" component={Resume}>Resume</NavLink>
        </div>
    )
}
export default Navigation