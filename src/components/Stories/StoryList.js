import React, {Component} from 'react';
import storyStyles from './Stories/Stories.module.scss';
import Stories from './Stories/Stories';
import CreateStoryButton from './CreateStoryButton/CreateStoryButton';
import img_1 from '../../assets/images/img_1.jpg';
import img_2 from '../../assets/images/img_2.jpg';
import img_3 from '../../assets/images/img_3.jpg';


class StoryList extends Component {

  state = {
    stories: [

      {
        id: 0,
        title: 'She folded her handkerchief neatly.',
        views: 13,
        comments: 1,
        img: img_1,
      },

      {
        id: 1,
        title: 'Stuff to do at midnight',
        views: 21,
        comments: 2,
        img: img_2,
      },

      {
        id: 2,
        title: 'Hey, what year is it?',
        views: 34,
        comments: 3,
        img: img_3,
      }

    ]

  }


    render(){
        return(
            <div className = { storyStyles["story-container"] } >
               <CreateStoryButton />
               <Stories stories={this.state.stories} />
             </div>
           )
    }


}

export default StoryList;