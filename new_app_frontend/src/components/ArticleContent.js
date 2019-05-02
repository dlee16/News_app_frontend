import React from 'react'

const ArticleContent = (props) => {
    const userComments = () => {
        return (
            props.article.comments.map(comment => {
                return <li>{comment.user_comment}</li>
            })
        )
    }

    if (props.article){
        return (
            <div>
                <h1>hello</h1>
                <h3>{props.article.title}</h3>
                <h3>{props.article.author}</h3>
                <h3>{props.article.image}</h3>
                <h3>{props.article.content}</h3>
                <h3>{props.article.likes}</h3>
                <h3>{props.article.published_date}</h3>
                <h3>{props.article.source}</h3>
                <h3>{userComments()}</h3>
            </div>
        )
    } else {
        return null
    }
}

export default ArticleContent;