/**
 * Post Template : 
 * it sets the data as per action using Map 
 * it can be : 1 image ,2 video or 3 document
 * 
 */
import React from 'react';

/*----------------- Components ------------------- */

import PostCreatorMaterialUi from './postcreatorMaterialui';
import './PostCreatorMaterialUi.css';

const PostTemplateMaterialui = (props) => {
    // template : for storing each post and shown in post div 
    let template = null;
    template = props.data.map((item,i) => {
      //widget > post > 
       return  <PostCreatorMaterialUi data={item} key={i} action = { props.action } />
    })
    return (
      <div className="post pt-2"> 
               {template}
      </div>
    )
}

export default PostTemplateMaterialui;

