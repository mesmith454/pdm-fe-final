import axios from 'axios';
import React from 'react'
import DeleteCampaign from './DeleteCampaign'
import EditCampaign from './EditCampaign';

class Campaign extends React.Component {
    constructor(props){
        super(props) 
        this.state ={
            title: this.props.title,
            party: this.props.party,
            level: this.props.level,
            c_notes: this.props.c_notes,
            dm_notes: this.props.dm_notes,
            user_id: this.props.user_id
        } 
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind
    }
    

   

    // handleDelete(){
    //     DeleteCampaign();
    //     this.props.history.push('/campaigns')
    // }

    // handleEdit(){
    //     EditCampaign();
    //     this.props.history.push('/editcampaign')
    // }



    render(){
        return(
            <div className="campaign_display">
                <table border ="1">
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>Party:</td>
                            <td>Level:</td>
                            <td>Campaign Notes</td>
                            <td>DM Notes</td>
                        </tr>
                        {campaigns.map((item, i) =>
                          <tr key={i}>
                                <td>{item.title}</td>
                                <td>{item.party}</td>
                                <td>{item.level}</td>
                                <td>{item.c_notes}</td>
                                <td>{item.dm_notes}</td>
                          </tr>
                        )}

                    </tbody>

                </table>

                <button className="delete" onClick={()=> deleteCampaign(item.id )}>Delete</button>
                <button className="edit">Edit</button>
            </div>
        )
    }
    
    //render edit button
    //render delete button

}

export default Campaign;