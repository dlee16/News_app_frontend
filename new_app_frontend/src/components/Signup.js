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
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
                </div>
                <div className="field">
                    <label>Name</label>
                    <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Name' />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default SignupForm