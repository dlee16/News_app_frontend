import React from 'react'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component{
    render() {
        return (
            <div>
                PROFILE PAGE
                <NavLink to='/profile'> My Profile </NavLink>
                <br />
                <NavLink to='/saved_articles'> Saved Articles </NavLink>
            </div>
        )
    }
}

export default Profile;