import React from 'react';
import Navigation from './Navigation/Navigation';
import CallToAction from '../CallToAction/CallToAction';
import sidebarStyles from './Sidebar.module.scss';


const sidebar = props => {

  return(
    <div className={sidebarStyles['sidebar']}>
      <div className = {sidebarStyles['sidebar-contain']}>
        <Navigation />
        <CallToAction />
      </div>
    </div>
  );

}

export default sidebar;
