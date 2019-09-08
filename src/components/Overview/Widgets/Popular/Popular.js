import React from 'react';
import popularStyles from './Popular.module.scss';
import popularIMG from '../../../../assets/images/img_1.jpg';
import StoryItem from '../../../Stories/Stories/StoryItem';

const popular = props => {

    return(
      <div className = {popularStyles["w-popular"]}>

        <h4 className = {popularStyles["overview__text"]}>Popular Stories</h4>

      </div>
    );

}

export default popular;
