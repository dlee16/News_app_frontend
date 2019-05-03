import React from 'react'
import { NavLink } from 'react-router-dom'

class Login extends React.Component{
    render(){
        return (
            <div>
               <form>
                    <h4>Username:</h4> 
                    <input type="text" placeholder="Enter username"/>
                    <h4>Password:</h4> 
                    <input type="text" placeholder="Enter password"/>
                    <br/>
                    <button>Sign In</button>
                    <button>Sign Up</button>
               </form>
            </div>
        )
    }
}

export default Login;