import React, { useEffect, useState } from "react";
import axios from "axios";

import DeleteCampaign from "./DeleteCampaign";



const AllCampaigns =() => {
    const [campaigns, setCampaigns] = useState([]);

    const fetchCampaigns = async () => {
        const {data} = await axios.get(
            "http://localhost:3001/campaigns"
        );
        const campaigns = data;
        setCampaigns(campaigns);
        console.log(campaigns)
    };

    useEffect(()=> {
        fetchCampaigns();
    }, []);


    const deleteCampaign = (id) => {
        axios.delete(`http://localhost:3001/campaigns/${id}`).then(() =>this.setState({
            status: 'Delete Successful'
         }));
         fetchCampaigns();
         alert("something happened")
        }

    const handleDelete = (itemid) => {
        
        let id = itemid
        deleteCampaign(id)
      }

      const itemid = () => `${item.id}`

    return (
        <div className="allcamps">
            <br></br>
            <h3>All Campaigns:</h3>
                <div className="tablediv">
                    {/* <Table /> */}

                    <table border ="1">
                            <tbody>
                                <tr>
                                    <td>Title:</td>
                                    <td>Party:</td>
                                    <td>Level:</td>
                                    <td>Campaign Notes</td>
                                    <td>DM Notes</td>
                                    <td>ID#</td>
                                    
                                
                                </tr>
                                {campaigns.map((item, i) =>
                                <tr key={i}>
                                        <td>{item.title}</td>
                                        <td>{item.party}</td>
                                        <td>{item.level}</td>
                                        <td>{item.c_notes}</td>
                                        <td>{item.dm_notes}</td>
                                        <td>{item.id}</td>
                                        <td>
                                           <button type="delete" onClick={handleDelete}>Delete</button>
                                        </td>
                                        <td>
                                           <button type="edit" onClick={handleDelete} >Edit</button>
                                        </td>
                                        
                                        
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>   

                    <div className="actionCenter">
                   
                    </div>          
        </div>
    )

}


export default AllCampaigns;