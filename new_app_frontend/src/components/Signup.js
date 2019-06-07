import React from 'react'

class SignupForm extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    errorDisplay = (error) => {
        this.setState({
            error
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser(this.state)
            // this.props.history.push('/home')
    }

    render() {
        return (

            <div className="ui middle aligned center aligned grid">
                <div id="column1">
                    <div className="centered">
                        <h2 className="ui login image header">
                            <div className="content">
                            Sign up to get the scoop!
                            </div>
                        </h2>
                    </div>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="address card icon"></i>
                                    <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Enter name' />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Enter username' />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Set  password' />
                                </div>
                            </div>
                            <div className="centered">
                                <button className="ui yellow button"type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm