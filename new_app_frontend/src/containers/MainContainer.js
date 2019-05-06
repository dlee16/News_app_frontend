import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import ArticleContent from '../components/ArticleContent'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Profile from '../components/Profile'

const url = 'http://localhost:3000/articles'

class MainContainer extends React.Component{

    state = {
        articles: [],
        user: ""
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
        console.log(id)
        let newLikes;
        const newArticles = this.state.articles.map(article => {
            if (article.id === id){
                newLikes = article.likes+1
                return {...article, likes: newLikes}
            } else {
                return article
            }
        })
        this.setState(prevState => ({
            articles: newArticles
        }, () => {
            fetch(`http://localhost:3000/articles/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ likes: newLikes }),
            })
                .then(res => res.json())
            // .then(article => {
            //     this.setState ({
            //         likes: article.likes
            //     })
            // })
        }))
    }


    findArticle = (title) => {
        return this.state.articles.find(article => article.title === title)
    }

    render() {
        console.log(this.state.articles)
        return(
            <div >
                <Nav /> 
                <Route exact path="/home" render={(routeProps) => (< Home {...routeProps} articles={this.state.articles} />)} />
                <Route path={'/article/:title'} render={(routeProps) => (<ArticleContent {...routeProps} likes = {this.state.likes} updateLikes ={this.updateLikes} article={this.findArticle(routeProps.match.params.title)} />)} />
                <Route exact path="/login" render={(routeProps) => (< Login {...routeProps} user={this.state.user} />)} />
                <Route exact path="/user/:id/profile" render={(routeProps) => (< Profile {...routeProps} user={this.state.user} />)} />
            </div>
        )
    }
}

export default MainContainer