import React from 'react'



class Login extends React.Component{

    render(){
        return (
            <div className="ui placeholder segment">
                <div className="ui stackable very relaxed two column grid">
                    <div className="column">
                        <form className="ui form">
                            <div className="field">
                                <label>Username</label>
                                <div className="ui left icon input">
                                    <input type="text" placeholder="Username" />
                                    <i aria-hidden="true" className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                    <div className="ui left icon input">
                                        <input type="password" />
                                            <i aria-hidden="true" className="lock icon"></i>
                                    </div>
                            </div>
                            <button className="ui yellow button">Login</button>
                        </form>
                    </div>
                    <div className="middle aligned column">
                        <button className="ui big yellow button">
                        <i aria-hidden="true" className="signup icon"></i>Sign up</button>
                    </div>
                </div>
                <div className="ui vertical divider">Or</div>
            </div>
        )
    }
}

export default Login;