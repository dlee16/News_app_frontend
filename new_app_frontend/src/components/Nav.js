import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
    return (
       <div>
           <NavLink to='/home'> Home </NavLink>
            <br/>
            <NavLink to='/login'> Login/Sign Up </NavLink>
            <br/>
            <NavLink to='/profile'> My Profile </NavLink>
            <br/>
            <NavLink to='/saved_articles'> Saved Articles </NavLink>
       </div>
    )
}

export default Nav;