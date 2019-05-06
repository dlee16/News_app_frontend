import React from 'react'
import ArticleCard from './ArticleCard'

const Article = (props) => {
    return (
        <div>
            <ArticleCard article={props.article} likes={props.likes} /> 
        </div>
    )
}

export default Article;