import React from 'react'

class SignupForm extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.createUser(this.state)
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className = "ui container" >
                <div className="ui celled grid">
                    <div className="row">
                        <div className="sixteen wide column">
                            <form className="ui form" onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <div className="centered">
                                    <label>Name</label>
                                    </div>
                                    <br/>
                                    <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Enter name' />

                                </div>
                                <div className="field">
                                    <div className="centered">
                                        <label>Username</label>
                                    </div>
                                    <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Enter username' />
                                </div>
                                
                                <div className="field">
                                    <div className="centered">
                                        <label>Password</label>
                                    </div>
                                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Set  password' />
                                </div>
                                <div className="centered">
                                <button className="ui yellow button"type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm