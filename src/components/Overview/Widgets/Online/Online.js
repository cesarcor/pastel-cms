import React from 'react';
import onlineStyles from './Online.module.scss';

const online = props => {

    return(

      <div className = {onlineStyles['w-online']}>

        <h4 className = {onlineStyles['overview__text']}>Users Online Right Now</h4>

        <div>
          <span className = {onlineStyles['w-online__now']}>42</span>
          <span className = {onlineStyles['w-online__percentage']}>+7%</span>
        </div>

        <p className = {onlineStyles['overview__text']}>Lorem ipsum doloret</p>

      </div>

    );

}

export default online;