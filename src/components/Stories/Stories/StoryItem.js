import React from 'react';
import { ReactComponent as CommentSVG } from '../../../assets/svgs/comments.svg';
import { ReactComponent as ViewsSVG } from '../../../assets/svgs/views.svg';


const storyItem = (props) => {

      return(

        <div className = "story-item">

           <div className = "story-item__img-contain">

             <img src = { props.story.img } alt = { props.story.title } />

           </div>

           <div className = "story-item__content">

             <h3 className = "story-item-heading">{ props.story.title }</h3>

             <ul className = "story-item-meta">
               <li className = "story-item-views"><ViewsSVG /> { props.story.views }</li>
               <li className = "story-item-comments"><CommentSVG /> { props.story.comments }</li>
             </ul>

           </div>



        </div>

      )

}

export default storyItem;
