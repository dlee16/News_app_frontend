import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import ArticleContent from '../components/ArticleContent'
import Nav from '../components/Nav'

// const url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=97a71b6649dd4f3b8c614dadacd3f50d';

const url = 'http://localhost:3000/articles'

class MainContainer extends React.Component{

    state = {
        articles: []
    }

    // componentDidMount() {
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(articles => {
    //       const idedArticles = articles.articles.map(article => {
    //         return {
    //           ...article,
    //           id: v4()
    //         }
    //       })
    //       this.setState({ articles: idedArticles })
    //     })
    // }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(articles => {
                this.setState({ articles })
            })
    }

    findArticle = (title) => {
        return this.state.articles.find(article => article.title === title)
    }

    render() {
        console.log(this.state.articles)
        
        return(
            <div>
                <Nav /> 
                <Route exact path="/home" render={(routeProps) => (< Home {...routeProps} articles={this.state.articles} />)} />
                <Route path={'/article/:title'} render={(routeProps) => (<ArticleContent {...routeProps} article={this.findArticle(routeProps.match.params.title)} />)} />
                <h2>CONTAINER</h2>
            </div>
        )
    }
}

export default MainContainer