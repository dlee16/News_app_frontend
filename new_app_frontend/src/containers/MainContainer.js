import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import ArticleContent from '../components/ArticleContent'
import Nav from '../components/Nav'
import Login from '../components/Login'

const url = 'http://localhost:3000/articles/find_articles'

class MainContainer extends React.Component{

    state = {
        articles: [],
        user: ""
    }

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
        console.log(this.state.user)
        
        return(
            <div>
                <Nav /> 
                <Route exact path="/home" render={(routeProps) => (< Home {...routeProps} articles={this.state.articles} />)} />
                <Route path={'/article/:title'} render={(routeProps) => (<ArticleContent {...routeProps} article={this.findArticle(routeProps.match.params.title)} />)} />
                <Route exact path="/login" render={(routeProps) => (< Login {...routeProps} user={this.state.user} />)} />
            </div>
        )
    }
}

export default MainContainer