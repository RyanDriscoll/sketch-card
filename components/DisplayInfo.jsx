import React from 'react';

const Display = (props) => (
  <nav id="main-navbar">
          <ul>
            <h2>INNING {`${props.inning}`} BATTER {`${props.batter}`}</h2>

          </ul>
  </nav>
);

export default Display;
