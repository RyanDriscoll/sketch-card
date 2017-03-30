import React from 'react';
import {Link} from 'react-router';
import { selectGame } from '../actions/games';
import store from '../store.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(game) {
    console.log(game);
    store.dispatch(selectGame(game));
  }

  render() {
    return (
      <div>
        <ul>
      {
        this.props.games && this.props.games.map((game, i) => {
          return (
                <li key={i} onClick={() => this.handleClick(game)} >
                  <Link to="/scorecard" >
                  {game.awayName} vs. {game.homeName}
                  </Link>
                </li>
          );
        })
          }
        </ul>
      </div>
    );
  }
}

export default Home;
