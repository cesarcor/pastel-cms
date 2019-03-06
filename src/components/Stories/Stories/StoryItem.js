import React from 'react';

const storyItem = (props) => {

      return(

        <div className = "story-item">

           <div className = "story-item__img-contain">

             <img src = { props.story.img } alt = { props.story.title } />

           </div>

           <div className = "story-item__content">

             <h3 className = "story-item-heading">{ props.story.title }</h3>

             <p className = "story-item-views">{ props.story.views }</p>

             <p className = "story-item-comments">{ props.story.comments }</p>

           </div>



        </div>

      )

}

export default storyItem;
