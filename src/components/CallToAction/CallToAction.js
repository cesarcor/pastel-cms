import React from 'react';
import { ReactComponent as CrownSVG } from '../../assets/svgs/crown.svg';
import Button from '../Button/Button';
import CTAStyles from './CallToAction.module.scss';

const callToAction = props => {

  return(
    <div className = {CTAStyles["premium-cta"]}>
      <CrownSVG />
      <h4>Premium</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo.</p>

      <div>
        <Button>Upgrade</Button>
      </div>

    </div>
  );

}

export default callToAction;
