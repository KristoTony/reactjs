import React from 'react';
import './Component1.css';

const Component1 = (props) => {
  return (
    <div className = "Component1">
      <p>Component {props.Cno} is working but is acting as Component:{props.Ano}</p>
      <p>{props.children}</p>
    </div>
  )
};

export default Component1;
