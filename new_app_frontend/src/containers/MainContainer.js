import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import ArticleContent from '../components/ArticleContent'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Favorites from '../components/Favorites'

const url = 'http://localhost:3000/articles'

class MainContainer extends React.Component{

    state = {
        articles: [],
        user: "",
        articleComment: [],
        favorites: []
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(articles => {
                const updatedArticles = articles.map(article => {
                    return {
                        ...article,
                        id: article.id
                    }
                })
                this.setState({ articles: updatedArticles})
            })
    }

    updateLikes = (id) => {
        let newLikes;
        const newArticles = this.state.articles.map(article => {
            if (article.id === id){
                newLikes = article.likes+1
                return {...article, likes: newLikes}
            } else {
                return article
            }
        })
        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: newLikes }),
            })
        this.setState({
            articles: newArticles
        })
    }


    updateComments = (id, input) => {

        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                    article_id: id,
                    user_id: 1,
                    user_comment: input
                }),
        })
        .then (res => res.json())
        .then(res => {
            this.setState(prevState => ({
                articleComment: [...prevState.articleComment, res.user_comment]
            }))
        })           
    }


    addToFavorites = (article) => {

        fetch(`http://localhost:3000/favorites`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                article_id: article.id,
                user_id: 1,
            }),
        })
            .then(res => res.json())
            .then(() => {
                this.setState(prevState => ({
                    favorites: [...prevState.favorites, article]
                }))
            })
    }

    findArticle = (title) => {
        return this.state.articles.find(article => article.title === title)
    }

    render() {
        return(
            <div >
                <Nav /> 
                <Route exact path="/home" render={(routeProps) => (< Home {...routeProps} articles={this.state.articles} />)} />
                <Route exact path="/favorites" render={(routeProps) => (< Favorites {...routeProps}  favorites={this.state.favorites} />)} />
                <Route path={'/article/:title'} render={(routeProps) => (<ArticleContent {...routeProps} addToFavorites={this.addToFavorites} likes = {this.state.likes} articleComment ={this.state.articleComment} updateComments ={this.updateComments} updateLikes ={this.updateLikes} article={this.findArticle(routeProps.match.params.title)} />)} />
                <Route exact path="/login" render={(routeProps) => (< Login {...routeProps} user={this.state.user} />)} />
                <Route exact path="/user/:id/profile" render={(routeProps) => (< Profile {...routeProps} user={this.state.user} />)} />
            </div>
        )
    }
}

export default MainContainer