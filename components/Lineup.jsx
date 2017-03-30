import React from 'react';
import { Link } from 'react-router';


export default Lineup = (props) => {

return (
  <div>
    <ol>
      {
      props.lineup.map((playerObj, index) => {
         return <li>{playerObj.name}</li>
       })
      }

    </ol>

  </div>
    )
  }

  
