import React from 'react'
import v4 from 'uuid'
import ArticleContent from './ArticleContent'

const Favorites = (props) => {

    const renderFavorites = () => {
        return props.favorites.map(article => {
            return <ArticleContent key={article.id} article ={article}/>
        })
    }

        return(
            <div>
                {renderFavorites()}
            </div>
        )
}

export default Favorites