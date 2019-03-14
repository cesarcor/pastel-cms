import React from 'react';
import './Online.css';

const online = props => {

    return(

      <div className = "w-online">

        <h4 className = "overview__text">Users Online Right Now</h4>

        <div>
          <span className = "w-online__now">42</span>
          <span className = "w-online__percentage">+7%</span>
        </div>

        <p className = "overview__text">Lorem ipsum doloret</p>

      </div>

    );

}

export default online;
