import React from 'react'

class Profile extends React.Component{
    render() {
        return (
            <div className="ui container">
                <div className="ui centered celled grid">
                    <div className="row">
                        <div className="ten wide column">
                            <h2 className="ui centered header">Welcome {this.props.currentUser ? this.props.currentUser.name : null} !</h2>
                            
                            <img src="https://png.pngtree.com/svg/20161021/de74bae88b.png" alt="broken" className="ui big rounded centered" />
                        </div>
                    </div>
                </div>
            </div>
                            
        )
    }
}

export default Profile;
 