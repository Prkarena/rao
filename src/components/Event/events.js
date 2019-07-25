/**
 * Events.js : Create Event list  
 */

import React,{ Component } from 'react';
import axios from 'axios';
import PostTemplateMaterialui from '../Widgets/Post/PostCreatorMaterialUi/postTemplateMaterialui';

class Event extends Component{
/**
 * for data we need some request to database for that we need to install axios 
 * > npm install axios --save
 */
//data for storing our json data 
 state = {
    data : []
 }
//axios get request 
 componentWillMount(props){
    axios.get(`http://localhost:3001/Events?_start=0&_end=7`)
    .then ( response => {
        //console.log(response.data);
       this.setState({
          data : response.data
       })
    })
 }

    render() {
       // console.log(this.state.posts);
       // PostTemplateMaterialui : widget > post > 
        return (
            <div>
                <PostTemplateMaterialui data = { this.state.data } action = "events" /> 
            </div>
        )
    }    

}

export default Event;