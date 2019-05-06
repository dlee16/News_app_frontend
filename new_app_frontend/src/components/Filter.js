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
            <div className="ui medium fluid icon input">
                <input onChange={this.handleChange} type="text" placeholder="Search by title...." value={this.state.search} /><i aria-hidden="true" className="search circular link icon"></i>
            </div>
        )
    }
}

export default Filter