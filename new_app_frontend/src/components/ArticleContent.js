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
    
    componentDidMount(){
        fetch('http://localhost:3000/comments')
        .then(res => res.json())
        .then(res => {
            let filteredComments = res.filter(comment => { 
                console.log(this.props)
                
            // const mappedComments = filteredComments.map(comment => comment.user_comment)
            // this.setState({comments: mappedComments})
        })
    })
    }

    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateComments(this.props.article.id, this.state.input)
    }

    handleClick = () => {
        this.props.updateLikes(this.props.article.id)
    }

    openArticle = () => {
        const url= this.props.article.url
           window.open(url);
    }

    userComments = () => {
        
        if (this.state.comments){
            return (
                this.state.comments.map(comment => {
                    return <li key={v4()}> {comment}</li>
                })
            )
        }
    }



    render (){
        
        if (this.props.article) {
            
        return (
            <div className="ui container">
                <div className="ui centered celled grid">
                    <div className="row">
                        <div className="ten wide column">
                <h3 className="ui centered header">{this.props.article.title}</h3>
                <h4 className="ui centered header">by: {this.props.article.author}</h4>
                <img src={this.props.article.image} alt="broken" className="ui big rounded centered" />
                <br/>
                <h3 className="ui centered header">Details: {this.props.article.content}</h3>
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
                
                    <button className="ui yellow animated button" onClick={this.openArticle}> 
                    <div className="visible content">Click here to read more!</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                    </div>
                    </button>
                     <div className="content divider"></div>
                   <br/>
                    <button onClick={this.handleFavClick} className="ui yellow animated button">
                        <div className="visible content">Save Article</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                        </div>
                    </button>
                
                <br/>

                <h3 className="ui centered header">Source: {this.props.article.source}</h3>
                
                        <div className="ui minimal comments">
                            <h3 className="ui dividing header">Comments</h3>
                                <div className="comment"><a className="avatar">
                                    <img src="/images/avatar/small/matt.jpg" /></a>
                                        <div className="content">
                                        <a className="author">Matt</a>
                                            <div className="metadata">
                                                <span>Today at 5:42PM</span>
                                            </div>
                                            <div className="text">{this.userComments()}</div>
                                            <div className="actions"><a>Reply</a>
                                            </div>
                                    </div>
                                </div><div className="comment"><a className="avatar"><img src="/images/avatar/small/elliot.jpg" /></a><div className="content"><a className="author">Elliot Fu</a><div className="metadata"><span>Yesterday at 12:30AM</span></div><div className="text"><p>This has been very useful for my research. Thanks as well!</p></div><div className="actions"><a>Reply</a></div></div><div className="ui comments"><div className="comment"><a className="avatar"><img src="/images/avatar/small/jenny.jpg" /></a><div className="content"><a className="author">Jenny Hess</a><div className="metadata"><span>Just now</span></div><div className="text">Elliot you are always so right :)</div><div className="actions"><a>Reply</a></div></div></div></div></div><div className="comment"><a className="avatar"><img src="/images/avatar/small/joe.jpg" /></a><div className="content"><a className="author">Joe Henderson</a><div className="metadata"><span>5 days ago</span></div><div className="text">Dude, this is awesome. Thanks so much</div><div className="actions"><a>Reply</a></div></div></div>
                        
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