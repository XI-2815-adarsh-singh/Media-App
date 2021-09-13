import React, { Component } from "react";

class Profile extends Component {
    render() {

        const imgStyle = { width: '30%' }

        return (
            <div className="container">
                <h2 className="mt-2">Profile (Id: {JSON.parse(localStorage.getItem('loggedInUser')).id})</h2>
                <div className="card">
                    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={imgStyle} />
                    <div className="card-body">
                        <h4 className="card-title">Name: {JSON.parse(localStorage.getItem('loggedInUser')).name}</h4>
                        <p className="card-text">Email: {JSON.parse(localStorage.getItem('loggedInUser')).email}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;