import React from 'react'

const ArticleContent = (props) => {
    const userComments = () => {
        
        if (props.article.comment){
            return (
                props.article.comments.map(comment => {
                    return <li>{comment.user_comment}</li>
                })
            )
        }
    }


    if (props.article){
        return (
            <div>
                <h3>{props.article.title}</h3>
                <h3>{props.article.author}</h3>
                <h3>{props.article.urlToImage}</h3>
                <h3>{props.article.content}</h3>
                <h3>Likes: {props.article.likes} </h3>
                <h3>{props.article.publishedAt}</h3>
                <a href={props.article.url}> Click here to read more!</a>
                <h3>{props.article.source.name}</h3>
                <textarea type="text" placeholder="Enter comment..."/>
                <h3>{userComments() ? userComments() : null} </h3>
            </div>
        )
    } else {
        return null
    }
}

export default ArticleContent;