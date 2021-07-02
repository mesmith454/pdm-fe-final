import React, { Component } from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

   handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
   }

   handleLogoutClick() {
       axios.delete("http://localhost:3001/logout", { withCredentials: true})
       .then(response => {
        this.re.handleLogout();
       })
       .catch(error => {
           console.log("logout error", error);
       });

   }

    render() {
        return (
            <div className="bannerContainer">
                <div className="titleCard">
                    <div className="logo">
                        <img src="../ran.png"
                        
                        alt="i borkeded" />
                    </div> 
                    <div>
                        <h1>PocketDM</h1>
                        <br></br>
                        <h2>A DM's Bestfriend</h2>
                    </div>
                </div>
                <div className="loginContainer">
                    <h1>Home</h1>
                    <h2>Status: {this.props.loggedInStatus}</h2>
                    <button onClick={() => this.handleLogoutClick()}>Logout</button>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>
        </div>
        )
    }
} 