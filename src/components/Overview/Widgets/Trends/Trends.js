import React from 'react';
import trendStyles from './Trends.module.scss';
import { ReactComponent as GraphSVG } from '../../../../assets/svgs/graph.svg';


const trends = props => {

    return(
      <div className = {trendStyles["w-trends"]}>

        <h4 className = {trendStyles["w-trends__heading"]}>Active Users Trending Over Time</h4>

        <div>
          <GraphSVG />
        </div>

        <div className = {trendStyles["trend-data__contain"]}>

          <div className = {trendStyles["trend-data-item"]}>
            <span>124</span>
            <span className= {trendStyles["overview__text"]}>Stories</span>
          </div>

          <div className = {trendStyles["trend-data-item"]}>
            <span>14k</span>
            <span className= {trendStyles["overview__text"]}>Views</span>
          </div>

          <div className = {trendStyles["trend-data-item"]}>
            <span>1m 21sec</span>
            <span className= {trendStyles["overview__text"]}>Av. Session Duration</span>
          </div>

        </div>


      </div>
    );

}

export default trends;
