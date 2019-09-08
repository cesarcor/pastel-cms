import React from 'react';
import { ReactComponent as CommentSVG } from '../../../assets/svgs/comments.svg';
import { ReactComponent as ViewsSVG } from '../../../assets/svgs/views.svg';
import storyStyles from './Stories.module.css';


const storyItem = (props) => {

      return(

        <div className = { storyStyles['story-item'] }>

           <div className = { storyStyles['story-item__img-contain'] }>

             <img src = { props.story.img } 
             className = { storyStyles['story-item__img'] } alt = { props.story.title } />

           </div>

           <div className = {storyStyles['story-item__content']}>

             <h3 className = { storyStyles['story-item-heading'] }>{ props.story.title }</h3>

             <ul className = { storyStyles['story-item-meta'] }>
               <li className = {storyStyles['story-item-views']} ><ViewsSVG /> { props.story.views }</li>
               <li className = {storyStyles['story-item-comments']} ><CommentSVG /> { props.story.comments }</li>
             </ul>

           </div>



        </div>

      )

}

export default storyItem;
