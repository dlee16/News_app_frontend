import React from 'react';
import logo from './logo.svg';
import './App.css';
import v4 from 'uuid'

const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=97a71b6649dd4f3b8c614dadacd3f50d';

class App extends React.Component {

  state={
    articles: []
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(articles => {
      const idedArticles = articles.articles.map(article => {
        return {
          ...article,
          id: v4()
        }
      })
      this.setState({articles: idedArticles})
    })
  }

  render(){
    console.log(this.state.articles)
    return (
      <div>
        hello
      </div>
    )
  }
}

export default App;
