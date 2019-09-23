import React from 'react';
import popularStyles from './Popular.module.scss';
import popularIMG from '../../../../assets/images/img_1.jpg';
import StoryItem from '../../../Stories/Stories/StoryItem';

const popular = props => {

    return(
      <div className = {popularStyles["w-popular"]}>

        <h4 className = {popularStyles["w-popular__heading"]}>Popular Stories</h4>

        <ul className = {popularStyles["w-popular__list"]}>
          <li><a href="#">Lorem ipsumet deleret et</a></li>
          <li><a href="#">Lorem ipsumet deleret et</a></li>
          <li><a href="#">Lorem ipsumet deleret et</a></li>
        </ul>

      </div>
    );

}

export default popular;
