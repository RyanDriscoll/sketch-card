import React from 'react';
import { Link } from 'react-router';

export default (props) => {

  return (
  <div>
    <ol>
      {
      props.lineup.map((playerObj, index) => {
        return <li>{playerObj.name}</li>;
      })
      }

    </ol>
    <div>
    </div>
  </div>
  );
};
