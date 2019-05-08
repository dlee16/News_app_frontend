import React from 'react'



class Login extends React.Component{
    state={
        username: "",
        password: "", 
        error: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    errorDisplay = (error) => {
        this.setState({
            error
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .then(res => res.json())
            .then(response => {
               if (response.errors){
                    this.errorDisplay(response.errors)
               } else {
                   this.props.setCurrentUser(response)
               }
            })
    }

    handleSignUpClick = () => {
        this.props.history.push('/signup')
    }

    render(){
        return (
            <div className="ui placeholder segment">
                <div className="ui stackable very relaxed two column grid">
                    <div className="column">
                        <form onSubmit={this.handleSubmit} className="ui form">
                            <div className="field">
                                <label>Username</label>
                                <div className="ui left icon input">
                                    <input type="text" placeholder="Username" onChange={this.handleChange} name="username" value={this.state.username} />
                                    <i aria-hidden="true" className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                    <div className="ui left icon input">
                                    <input type="password" onChange={this.handleChange} name="password" value={this.state.password} />
                                            <i aria-hidden="true" className="lock icon"></i>
                                    </div>
                            </div>
                            <button className="ui yellow button">Login</button>
                        </form>
                        <div className={this.state.error ? "ui message" : "ui hidden message"}> 
                                 <h3 className="centered">{this.state.error ? this.state.error : null} </h3>
                        </div>
                          
                    </div>
                    <div className="middle aligned column">
                        <button onClick={this.handleSignUpClick} className="ui big yellow button">
                        <i aria-hidden="true" className="signup icon"></i>Sign up</button>
                    </div>
                </div>
                <div className="ui vertical divider">Or</div>
            </div>
        )
    }
}

export default Login;