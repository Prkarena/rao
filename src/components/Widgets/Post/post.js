/**
 * Post.js : 
 * 
 */


import React,{ Component } from 'react';
import axios from 'axios';
import PostTemplateMaterialui from '../Post/PostCreatorMaterialUi/postTemplateMaterialui';


class Post extends Component{
/**
 * for data we need some request to database for that we need to install axios 
 * > npm install axios --save
 */

 state = {
     posts : []
 }

 componentWillMount(props){
    axios.get(`http://localhost:3001/Posts?_start=${this.props.start}&_end=${this.props.end}`)
    .then ( response => {
        //console.log(response.data);
       this.setState({
           posts : response.data
       })
    })
 }

    render() {
       // console.log(this.state.posts);
        return (
            <div>
                <PostTemplateMaterialui data = { this.state.posts } action = "posts" /> 
            </div>
        )
    }    

}

export default Post;