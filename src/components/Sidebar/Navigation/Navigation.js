import React from 'react';
import './Navigation.css';
import CallToAction from '../../CallToAction/CallToAction';
import { ReactComponent as DahsboardSVG } from '../../../assets/svgs/menu.svg';
import { ReactComponent as StoriesSVG } from '../../../assets/svgs/story.svg';
import { ReactComponent as AnalyticsSVG } from '../../../assets/svgs/chart.svg';
import { ReactComponent as SettingsSVG } from '../../../assets/svgs/settings.svg';

const Navigation = (props) => {

  return(
    <nav className = "nav-menu">
      <ul>
        <li><a href="#"><DahsboardSVG/> <span>Dashboard</span></a></li>
        <li><a href="#"><StoriesSVG/> <span>Stories</span></a></li>
        <li><a href="#"><AnalyticsSVG/> <span>Analytics</span></a></li>
        <li><a href="#"><SettingsSVG/> <span>Settings</span></a></li>
      </ul>

      <CallToAction />
    </nav>
  );

}

export default Navigation;
