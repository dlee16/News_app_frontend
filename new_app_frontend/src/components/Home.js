import React from 'react'
import Article from './Article'
import v4 from 'uuid';
import Filter from './Filter'

class Home extends React.Component {
    state = {
       input: "",
       likes: 0
    }

    searchChange = (search) => {
        this.setState({
            input: search
        })
    }

    articles = () => {
       return this.filter().map(article => {
            return <Article key={v4()} likes={this.state.likes} article={article} /> 
        })
    }

    filter = () => {
       return this.props.articles.filter(article => {
            return article.title.toLowerCase().includes(this.state.input)
        })
    }

    render() {
        return (
            <div>
                <Filter searchChange={this.searchChange}/> 
                {this.articles()}
            </div>
        )
    }
}

export default Home