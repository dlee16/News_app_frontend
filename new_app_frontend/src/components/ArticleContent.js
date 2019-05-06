import React from 'react'

class ArticleContent extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {likes: this.props.article.likes}
    // }
    




    handleClick = () => {
        this.props.updateLikes(this.props.article.id)
    }

    openArticle = () => {
        const url= this.props.article.url
           window.open(url);
    }

    userComments = () => {
        
        if (this.props.article.comment){
            return (
                this.props.article.comments.map(comment => {
                    return <li>{comment.user_comment}</li>
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
                    <button className="ui yellow animated button">
                        <div className="visible content">Save Article</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i>
                        </div>
                    </button>
                
                <br/>

                <h3 className="ui centered header">Source: {this.props.article.source}</h3>
                
                <h3 className="ui centered header"> Comments: {this.userComments() ? this.userComments() : null} </h3>

                        <div className="ui minimal comments"><h3 className="ui dividing header">Comments</h3><div className="comment"><a className="avatar"><img src="/images/avatar/small/matt.jpg" /></a><div className="content"><a className="author">Matt</a><div className="metadata"><span>Today at 5:42PM</span></div><div className="text">How artistic!</div><div className="actions"><a>Reply</a></div></div></div><div className="comment"><a className="avatar"><img src="/images/avatar/small/elliot.jpg" /></a><div className="content"><a className="author">Elliot Fu</a><div className="metadata"><span>Yesterday at 12:30AM</span></div><div className="text"><p>This has been very useful for my research. Thanks as well!</p></div><div className="actions"><a>Reply</a></div></div><div className="ui comments"><div className="comment"><a className="avatar"><img src="/images/avatar/small/jenny.jpg" /></a><div className="content"><a className="author">Jenny Hess</a><div className="metadata"><span>Just now</span></div><div className="text">Elliot you are always so right :)</div><div className="actions"><a>Reply</a></div></div></div></div></div><div className="comment"><a className="avatar"><img src="/images/avatar/small/joe.jpg" /></a><div className="content"><a className="author">Joe Henderson</a><div className="metadata"><span>5 days ago</span></div><div className="text">Dude, this is awesome. Thanks so much</div><div className="actions"><a>Reply</a></div></div></div><form className="ui reply form"><div className="field"><textarea rows="3"></textarea></div><button className="ui icon yellow left labeled button"><i aria-hidden="true" className="edit icon"></i>Add Reply</button></form></div>
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