import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {

    return (
       props.currentUser ? 
           <div className="ui pointing menu">
               <NavLink className="item" to='/home'> Home </NavLink>
               <br />
               <NavLink onClick={props.logOut} className="item" to='/login'> Logout</NavLink>
               <br />
                <NavLink className="item" to={`/${props.currentUser.id}/profile`}> My Profile </NavLink>
               <br />
               <NavLink className="item" to='/favorites'> Saved Articles </NavLink>
           </div> : 
        <div className="ui pointing menu">
           <NavLink className="item" to='/home'> Home </NavLink>
            <br/>
            <NavLink className="item" to='/login'> Login/Sign Up </NavLink>
       </div>
    )
}

export default Nav;