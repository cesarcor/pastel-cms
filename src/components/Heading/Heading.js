import React from 'react';
import headingStyles from './Heading.module.scss';

const heading = props => {

  return(
    <h2 className={headingStyles['p-heading']}>{props.children}</h2>
  );

}

export default heading;
