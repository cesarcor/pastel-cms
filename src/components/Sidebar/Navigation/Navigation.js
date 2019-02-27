import React from 'react';

const Navigation = (props) => {

  return(
    <nav className = "nav-menu">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );

}

export default Navigation;
