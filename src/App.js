import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Encounter from './Encounter';
import playerInit from './static/playerInit';

class World extends Component {
    constructor() {
        super();
        this.state = {
            player: {
                stats: {},
                baseDmg: 2
            }
        }

        this.updatePlayer = this.updatePlayer.bind(this);
    }

    updatePlayer(player) {
        this.setState({ player });
    }

    componentDidMount() {
        this.setState({ player: playerInit });
    }

    render() {
        return (
            <div className='World'>
                <Encounter player={ this.state.player } updatePlayer={ this.updatePlayer } />
            </div>
        );
    }
}


function App() {
  return (
    <div className="App">
        <World />
    </div>
  );
}

export default App;
