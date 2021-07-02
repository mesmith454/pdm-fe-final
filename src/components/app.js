import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import AllCampaigns from './campaigns/AllCampaigns';
import CreateCampaign from './campaigns/CreateCampaign';
import Campaign from './campaigns/Campaign';
import DeleteCampaign from './campaigns/DeleteCampaign';

import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        }) 
      } else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        }) 
      }
    }) 
    .catch(error => {
      console.log("check login error", error)
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  } 

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch> 
            <Route 
              exact path={"/"} render={props => (
                <Home {... props} handleLogin={this.handleLogin}loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
              )}
            />

            <Route exact path={"/dashboard"} 
              render = {props => (
                <Dashboard {... props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />

              <Route exact path={"/campaigns"} 
              render = {props => (
                <AllCampaigns {... props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />

            <Route exact path={"/createcampaign"} 
              render = {props => (
                <CreateCampaign {... props} loggedInStatus={this.state.loggedInStatus} user = {this.state.user} />
              )}
            />

            <Route exact path={"/campaigns/:id"} 
              render = {props => (
                <Campaign {... props} loggedInStatus={this.state.loggedInStatus} user = {this.state.user}/>
              )}
            />

            <Route exact path={"/campaigns/delete/:id"} 
              render = {props => (
                <DeleteCampaign {... props} loggedInStatus={this.state.loggedInStatus} campaign = {this.state.campaign}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
