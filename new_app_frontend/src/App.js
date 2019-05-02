import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends React.Component {
  render(){
    return (
      <div>
        < Header /> 
        < MainContainer /> 
      </div>

    )
  }
}

export default App;
