import React from 'react'

class Profile extends React.Component{

    deleteProfile = () => {
      this.props.deleteProfile()
    }

    render() {
        if(this.props.currentUser){
            return (
                <div className="ui container">
                    <div className="ui centered celled grid">
                        <div className="row">
                            <div className="ten wide column">
                                <h2 className="ui centered header">Welcome {this.props.currentUser ? this.props.currentUser.name : null} !</h2>
                                <div className="ui divider"></div>
                                    <div className="centered">
                                        <img src="https://png.pngtree.com/svg/20161021/de74bae88b.png" width="200px" height="200px" alt="broken" className="ui big rounded centered" />
                                    </div>
                                <div className="ui divider"></div>
                                <h2>Since joining the Scoop you've:</h2>
                                <h3><li>Favorited {this.props.currentUser.favorites.length} articles</li></h3>
                                <button onClick={this.deleteProfile}>Delete Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                                
            )
        }
        else {
            return null
        }
    }
}

export default Profile;
