import React, { Component } from 'react';
import StoryItem from './StoryItem.js';

class Stories extends Component {

  render() {

    return this.props.stories.map((story) => (
      <div>
        <StoryItem key={story.id} story={story}/>
      </div>
    ));

  }

}

export default Stories;
