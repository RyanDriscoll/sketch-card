import React from 'react';
import { Link } from 'react-router';

const Games = (props) => (
    <ul>
      {
        props.games && props.games.map(game => {
          return (
            <li>
              <Link to
            </li>
          );
        })
      }
    </ul>
);

export default Games;