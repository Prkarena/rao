/**
 * Home : 
 * 
 */
import React from 'react';
import Slider from '../Widgets/Slider/slider';
import Post from '../Widgets/Post/post';
//css
import './home.css';

const Home = () => {
    return (
        <div className="mainContainer">  
          <Slider
            type = "template1"
            start = {0}
            end = {5}
          />
          <Post
           start = {0}
           end = {9}
          />
        </div>
    )
}

export default Home;