import React, { Component } from 'react';
import './Stories.css';
import StoryItem from './StoryItem.js';

class Stories extends Component {

  render() {

    return this.props.stories.map((story) => (

        <article>

            <StoryItem key={story.id} story={story}/>

        </article>

    ));

  }

}

export default Stories;
