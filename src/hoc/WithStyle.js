import React from 'react';

const WithStyle = props => (
  <div className={props.styles}>
    {props.children}
  </div>
);

export default WithStyle;
