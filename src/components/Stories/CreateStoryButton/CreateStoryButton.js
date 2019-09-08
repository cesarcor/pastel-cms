import React from 'react';
import cSBStyles from './CreateStoryButton.module.scss';

const createStoryButton = props => {

    return(
      <div className = { cSBStyles['create-story'] }>

        <button>
          <span>+ </span><br/>
          <span>Create Story</span>
        </button>


      </div>
    );

}

export default createStoryButton;
