import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticleCard = (props) => {
    return (
        <div>
            <h3>Title: {props.article.title}</h3>
            <h3>Author: {props.article.author}</h3>
            <img src={props.article.image} width="500px" height="300px"/>
            <h3>Likes: {props.article.likes}</h3>
            <h3>Date: {props.article.published_date}</h3>
            
            <NavLink to={'/login'} > Sign in to get the Scoop </NavLink>
        </div>
    )
} 

export default ArticleCard;
                