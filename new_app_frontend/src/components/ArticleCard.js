import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticleCard = (props) => {
    return (
        <div>
            <h3>{props.article.title}</h3>
            <h3>{props.article.author}</h3>
            <h3>{props.article.image}</h3>
            <h3>{props.article.description}</h3>
            <h3>{props.article.likes}</h3>
            <h3>{props.article.published_date}</h3>
            
            <NavLink to={'article/' + props.article.title} > Sign up to read full article </NavLink>
        </div>
    )
} 

export default ArticleCard;
                