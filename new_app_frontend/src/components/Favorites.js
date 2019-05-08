import React from 'react'
import v4 from 'uuid'
import ArticleContent from './ArticleContent'


class Favorites extends React.Component {

    state={
        favorites: true
    }

    renderFavorites = () => {
        if (this.props.currentUser){
            return this.props.currentUser.favorites.map(fave => {
                const foundArticle = this.props.articles.find(article => article.id === fave.article_id)
                return <ArticleContent key={v4()} article ={foundArticle} favorites={this.state.favorites}/>
            })
        } else{
            return "LOADING..."
        }   
    }
    render() {
        return(
            <div>
                {this.renderFavorites()}
            </div>
        )
    }
}

export default Favorites