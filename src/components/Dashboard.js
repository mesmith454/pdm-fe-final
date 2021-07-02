import React from 'react';
import AllCampaigns from './campaigns/AllCampaigns';
import CreateCampaigns from './campaigns/CreateCampaign';


const Dashboard = (props) => {
    return(
        <div>
            <div className="dash">
                <h1>Dashboard</h1>
                <h2>Status: {props.loggedInStatus}</h2>
            </div>
            <AllCampaigns />
          
            <CreateCampaigns />
        </div>
    )

}

export default Dashboard;