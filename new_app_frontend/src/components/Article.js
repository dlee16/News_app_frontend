import React from 'react'
import ArticleCard from './ArticleCard'

const Article = (props) => {
    return (
        <div>
            <ArticleCard currentUser={props.currentUser} article={props.article} /> 
        </div>
    )
}

export default Article;