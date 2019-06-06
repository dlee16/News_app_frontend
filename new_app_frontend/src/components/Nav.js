import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {

    return (
       props.currentUser ? 
            <div className="ui inverted four item menu">
               <NavLink className="black item" to='/home'> Home </NavLink>
               <br />
                <NavLink onClick={props.logOut} className="black item" to='/login'> Logout</NavLink>
               <br />
                <NavLink className="black item" to={`/${props.currentUser.id}/profile`}> My Profile </NavLink>
               <br />
                <NavLink className="black item" to='/favorites'> Saved Articles </NavLink>
           </div> : 
        <div className="ui inverted two item menu">
           <NavLink className="black item" to='/home'> Home </NavLink>
            <br/>
            <NavLink className="black item" to='/login'> Login/Sign Up </NavLink>
       </div>
    )
}

export default Nav;




