import React from 'react'

class Filter extends React.Component {
    state = { 
        search: ""
    }

    handleChange = (e) => {
        this.setState ({
            search: e.target.value
        }, () => {
            this.props.searchChange(this.state.search)
        })
    }

    render() {
        return (
            <div>
                <input onChange = {this.handleChange} type="text" placeholder="Search by title...." value={this.state.search}/>
            </div>
        )
    }
}

export default Filter