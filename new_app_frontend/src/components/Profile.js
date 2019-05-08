import React from 'react'

class Profile extends React.Component{

    deleteProfile = () => {
      this.props.deleteProfile()
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui centered celled grid">
                    <div className="row">
                        <div className="ten wide column">
                            <h2 className="ui centered header">Welcome {this.props.currentUser ? this.props.currentUser.name : null} !</h2>

                            <button onClick={this.deleteProfile}>Delete Profile</button>
                            <img src="https://png.pngtree.com/svg/20161021/de74bae88b.png" width="100px" height="100px" alt="broken" className="ui big rounded centered" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Profile;
