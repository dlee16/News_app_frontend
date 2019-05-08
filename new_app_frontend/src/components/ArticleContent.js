import React from 'react'
import v4 from 'uuid'

class ArticleContent extends React.Component{
    
    state ={
        input: "",
        comments: [],
    }

    handleFavClick = () => {
        this.props.addToFavorites(this.props.article)
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateComments(this.props.article.id, this.state.input)
        this.setState({
            input: ""
        })
    }

    handleClick = () => {
        this.props.updateLikes(this.props.article.id)
    }

    openArticle = () => {
        const url= this.props.article.url
           window.open(url);
    }

    userComments = () => {
        if(this.props.article.comments){
            return this.props.article.comments.map(comment => 
            <li key={v4()}> {comment.user_name} - {comment.user_comment} </li>)
        }
    }



    render (){
        if (this.props.article) {
        return (
            <div className="ui container">
                <div className="ui centered celled grid">
                    <div className="row">
                        <div className="ten wide column">
                <h2 className="ui centered header">{this.props.article.title}</h2>
                <h4 className="ui centered header">by: {this.props.article.author}</h4>
                <img src={this.props.article.image} alt="broken" className="ui big rounded centered" />
                <br/>
                            <h3 className="ui centered header">{this.props.article.description}</h3>
                <div>
                    <div className="ui labeled button">
                        <button onClick={this.handleClick} className="ui right floated red button" tabIndex="0">
                        <i aria-hidden="true" className="heart icon"></i> 
                        Likes</button>
                        <div className="ui red left pointing basic label">{this.props.article.likes}
                        </div>
                    </div>
                </div>
                <h3 className="ui centered header"> Date:{this.props.article.published_date}</h3>
                
                <div className="ui buttons">
                    <button className="ui yellow animated button" onClick={this.openArticle}> 
                    <div className="visible content">Click here to read more!</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                    </div>
                    </button>
                    <div className="or"></div>
                   <br/>
                    <button onClick={this.handleFavClick} className="ui yellow animated button">
                        <div className="visible content">Save Article</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                        </div>
                    </button>
                 </div>
                <br/>

                <h3 className="ui centered header">Source: {this.props.article.source}</h3>
                
                        <div className="ui minimal comments">
                            <h3 className="ui dividing header">Comments</h3>
                                <div className="comment">
                                        <div className="content">
                                            <div className="text">{this.userComments()}</div>
                                    </div>
                                </div>
                                
                        
                    <form onSubmit={this.handleSubmit} className="ui reply form">
                        <div className="field">
                            <textarea rows="3" value={this.state.input} onChange={this.handleChange} >
                                </textarea>
                        </div>
                        <button className="ui icon yellow left labeled button"><i aria-hidden="true" className="edit icon"></i>Add Reply</button>
                    </form>
                </div>
            </div>
            </div>
                </div>
            </div>
        )
    } else {
        return null
    }
    }
}

export default ArticleContent;