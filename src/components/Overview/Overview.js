import React from 'react';
import Online from './Widgets/Online/Online';
import Popular from './Widgets/Popular/Popular';
import Trends from './Widgets/Trends/Trends';
import overviewStyles from './Overview.module.scss';

const overview = props => {

  return(
    <div className = {overviewStyles["overview-container"]}>

      <div className = {overviewStyles["overview"]}>

        <div className = {overviewStyles["overview-item"]}>

          <Online />

        </div>

        <div className = {overviewStyles["overview-item"]}>

          <Trends />

        </div>

        <div className = {overviewStyles["overview-item"]}>

          <Popular />

        </div>

      </div>

    </div>
  );

}

export default overview;
