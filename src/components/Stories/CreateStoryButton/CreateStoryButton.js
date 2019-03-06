import React from 'react';
import './CreateStoryButton.css';

const createStoryButton = props => {

    return(
      <div className = "create-story">

        <button>
          <span>+ </span>
          <span>Create Story</span>
        </button>


      </div>
    );

}

export default createStoryButton;
