import React from 'react';
import './Heading.css';

const heading = props => {

  return(
    <h2 className="p-heading">{props.children}</h2>
  );

}

export default heading;
