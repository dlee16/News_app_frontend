import React from 'react'
import v4 from 'uuid'
import ArticleContent from './ArticleContent'


const Favorites = (props) => {
  
    const renderFavorites = () => {
        if (props.currentUser){
            return props.currentUser.favorites.map(fave => {
                const foundArticle = props.articles.find(article => article.id === fave.article_id)
                return <ArticleContent key={v4()} article ={foundArticle}/>
            })
        } else{
            return "LOADING..."
        }   
    }

        return(
            <div>
                {renderFavorites()}
            </div>
        )
}

export default Favorites