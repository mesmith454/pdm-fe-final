import React, { Component } from 'react'; 
import axios from 'axios'

export default class EditCampaign extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            party: "",
            level: "",
            c_notes: "",
            dm_notes: "",
            user_id: this.props.user_id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        const {
            title,
            party,
            level,
            c_notes,
            dm_notes,
            user_id
        } = this.state

        axios.patch("http://localhost:3001/campaigns", {
           
               title: title,
               party: party,
               level: level,
               c_notes: c_notes,
               dm_notes: dm_notes,
               user_id: user_id
        },
         { withCredentials: true } 
        )
        .then(res=> {
            console.log("sub resp", res);
            console.log(res.data);
            // window.location = "/campaigns"
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSuccessfulPost(){

    // }

    render () {
        return (
            <div>
                <h3>Create a Campaign:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} required />

                    <input type="text" name="party" placeholder="Party" value={this.state.party} onChange={this.handleChange} required />

                    <input type="level" name="level" placeholder="Level" value={this.state.level} onChange={this.handleChange} required />

                    <input type="c_notes" name="c_notes" placeholder="Campaign Notes" value={this.state.c_notes} onChange={this.handleChange} required />

                    <input type="dm_notes" name="dm_notes" placeholder="DM Notes" value={this.state.dm_notes} onChange={this.handleChange} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}