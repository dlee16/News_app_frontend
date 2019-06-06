import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import ArticleContent from '../components/ArticleContent'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Favorites from '../components/Favorites'

const url = 'http://localhost:3000/articles/find_articles'

class MainContainer extends React.Component{

    state = {
        articles: [],
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
                user_id: this.props.currentUser.id,
                user_comment: input
            }),
        })
            .then(res => res.json())
            .then(res => {
                let articleComments = this.state.articles.find(article => article.id === id)
                articleComments.comments.push(res)
                let newArticleState = [...this.state.articles].find(article => article.id === id)
                let articles = [...this.state.articles]
                let updateArticles = articles.splice(articles.indexOf(newArticleState), 1, articleComments)
                console.log(updateArticles)
                this.setState({
                    articles: articles
                })
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
                user_id: this.props.currentUser.id,
            }),
        })
            .then(res => res.json())
            .then((resp) => {
                this.props.updateFavorites(resp)
            })
    }



    findArticle = (title) => {
        return this.state.articles.find(article => article.title === title)
    }

    render() {
        return(
            <div >
                <Nav logOut={this.props.logOut}  currentUser={this.props.currentUser} />
                <Route exact path="/home" render={(routeProps) => (< Home {...routeProps} currentUser={this.props.currentUser} articles={this.state.articles} />)} />

                <Route exact path="/favorites" render={(routeProps) => (< Favorites {...routeProps}
                articles={this.state.articles}
                currentUser={this.props.currentUser}  />)} />

                <Route path={'/article/:title'} render={(routeProps) => (<ArticleContent {...routeProps}
                addToFavorites={this.addToFavorites}
                likes = {this.state.likes}
                updateComments ={this.updateComments}
                updateLikes ={this.updateLikes}
                article={this.findArticle(routeProps.match.params.title)} />)} />

                <Route exact path="/login" render={(routeProps) => (< Login {...routeProps} setCurrentUser={this.props.setCurrentUser} />)} />

                <Route exact path={this.props.currentUser ? `/${this.props.currentUser.id}/profile`: '/home'} render={(routeProps) => (< Profile {...routeProps} currentUser={this.props.currentUser} deleteProfile={this.props.deleteProfile}/>)} />

            </div>
        )
    }
}

export default MainContainer
