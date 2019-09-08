import React, { Component } from 'react';
import storyStyles from './Stories.module.scss';
import StoryItem from './StoryItem.js';

class Stories extends Component {

  render() {

    return this.props.stories.map((story) => (

        <article className = {storyStyles['story-container']}>

            <StoryItem key={story.id} story={story}/>

        </article>

    ));

  }

}

export default Stories;
