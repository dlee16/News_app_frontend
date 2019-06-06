import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticleCard = (props) => {
    const renderButton = () => {
        if(props.currentUser){
            // const receivedArticleName = encodeURIComponent(props.article.title)
            return <div className="centered"><NavLink className="ui black button" to={`/article/${props.article.title}`} > Article details <i aria-hidden="true" className="right chevron icon"></i> </NavLink></div>
        } else{
            return <div className="centered"><NavLink className="ui black button" to={'/login'} > Sign in to get the Scoop <i aria-hidden="true" className="right chevron icon"></i> </NavLink></div>

        }
    }
    
    return (
        <div className="ui container">
            <div className="ui celled grid">
                <div className="row">
                    <div className="six wide column">
                        <h3 className="ui centered header">{props.article.title}</h3>
                        <h5 className="ui centered header">by: {props.article.author === null ? "Author Unknown" : props.article.author}</h5>

                        <div className="centered">
                            <div className="ui labeled button">
                                <button className="ui yellow button" tabIndex="0">
                                    <i aria-hidden="true" className="heart icon"></i>
                                    Likes</button>
                                <div className="ui yellow left pointing basic label">{props.article.likes}
                                </div>
                            </div>
                        </div>

                        <h4 className="ui centered header">Date: {props.article.published_date}</h4>
                    
                            {renderButton()}
                        
                    </div>
                    <div className=" ten wide column">
                        <img src={props.article.image ? props.article.image : "../logo2.png" } alt="../logo2.png" width="500px" height="300px" className="ui large rounded centered image" />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ArticleCard;
