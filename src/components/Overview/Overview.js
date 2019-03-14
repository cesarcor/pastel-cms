import React from 'react';
import Online from './Widgets/Online/Online';
import Popular from './Widgets/Popular/Popular';
import Trends from './Widgets/Trends/Trends';

const overview = props => {

  return(
    <div className = "overview">

      <div className = "overview-item">

        <Online />

      </div>

      <div className = "overview-item">

        <Trends />

      </div>

      <div className = "overview-item">

        <Popular />

      </div>

    </div>
  );

}

export default overview;
