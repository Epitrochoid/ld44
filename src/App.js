import React, { Component } from 'react';
import './App.css';

import Encounter from './Encounter';
import playerInit from './static/playerInit';
import Map from './Map';

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

        const testEnemy = {
            name: 'Reaper',
            stats: {
                acc: 10,
                eva: 10,
                str: 8,
                def: 5,
                con: 10
            },
            baseDmg: 1,
            hp: 10
        };
        this.setState({ enemy: testEnemy });
    }

    render() {
        return (
            <div className='World'>
                <Encounter player={ this.state.player } enemy={ this.state.enemy } updatePlayer={ this.updatePlayer } />
            </div>
        );
    }
}


function App() {
  return (
    <div className="App">
        {/* <World /> */}
        <Map />
    </div>
  );
}

export default App;
