import React, { useEffect, useState } from "react";
import axios from 'axios'


class DeleteCampaign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status: null
        }
    }

    componentDidMount() {
      axios.delete('http://localhost:3001/campaigns/:id').then(() =>this.setState({
        status: 'Delete Successful'
      }));
    }


  handleDelete = () => {
    this.componentDidMount();
  }

  render(){

    return (
     <div>
        <button onClick={handleDelete}>UWU</button>
           
      </div>
    )
  }
}
export default DeleteCampaign;