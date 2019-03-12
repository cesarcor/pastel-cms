import React from 'react';
import './CallToAction.css';
import { ReactComponent as CrownSVG } from '../../assets/svgs/crown.svg';

const callToAction = props => {

  return(
    <div className = "premium-cta">
      <CrownSVG />
      <h4>Premium</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo.</p>

      <div>
        <a className = "btn" href="#">Upgrade</a>
      </div>

    </div>
  );

}

export default callToAction;
