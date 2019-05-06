import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {

    

    return (
        <div className="ui pointing menu">
           <NavLink className="item" to='/home'> Home </NavLink>
            <br/>
            <NavLink className="item" to='/login'> Login/Sign Up </NavLink>
            <br/>
            <NavLink className="item" to='/profile'> My Profile </NavLink>
            <br/>
            <NavLink className="item" to='/saved_articles'> Saved Articles </NavLink>
       </div>
    )
}

export default Nav;