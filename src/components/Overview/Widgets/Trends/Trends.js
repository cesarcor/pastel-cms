import React from 'react';
import './Trends.css';

const trends = props => {

    return(
      <div className = "w-trends">

        <h4 className = "overview__text">Active Users Trending Over Time</h4>

        <div className = "trend-data__contain">

          <div className = "trend-data-item">
            <span>124</span>
            <span>Stories</span>
          </div>

          <div className = "trend-data-item">
            <span>14k</span>
            <span>Views</span>
          </div>

          <div className = "trend-data-item">
            <span>1m 21sec</span>
            <span>Av. Session Duration</span>
          </div>

        </div>


      </div>
    );

}

export default trends;
