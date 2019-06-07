import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Signup from './components/Signup'
import { Route} from 'react-router-dom'

class App extends React.Component {

  state ={
    currentUser: null,
    error: null
  }


  logOut = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: null
    }, () => {
      this.props.history.push("/login")
    })
  }

  updateUser = (updatedUser) => {
    this.setState({
      currentUser: updatedUser
    })
  }

  errorDisplay = (error) => {
    this.setState({
      error
    })
    return(
    <div>
      {this.state.error}
    </div>
    )
  }

  deleteProfile = () => {
    fetch(`https://thescoop101.herokuapp.com/users/${this.state.currentUser.id}`, {
      method: "DELETE"
    })
    .then(this.setState({
      currentUser: null
    }))
    .then(this.props.history.push('/home'))
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      fetch("https://thescoop101.herokuapp.com/auto_login", {
        headers: {
          "Authorization": token
        }
      })
        .then(res => res.json())
        .then((response) => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
    }
  }

  setCurrentUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.setItem("token", response.token)
        this.props.history.push(`/home`)
    })
  }

  createUser = (user) => {
    fetch("https://thescoop101.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.setCurrentUser(response)
          this.props.history.push('/home')
        }
      })
  }

  updateFavorites = (resp) => {
    if (this.state.currentUser){
      this.setState({
        currentUser: {...this.state.currentUser,favorites: [...this.state.currentUser.favorites, resp] }
      })
    }
  }

  render(){
    return (
      <div>
        < Header />
        < MainContainer updateFavorites={this.updateFavorites} logOut={this.logOut} currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser} deleteProfile={this.deleteProfile}/>
        < Route exact path="/signup" render={(routeProps) => (< Signup {...routeProps } error={this.state.error} createUser = {this.createUser}/>)} />
      </div>

    )
  }
}

export default App;
