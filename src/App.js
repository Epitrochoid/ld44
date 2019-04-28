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
                baseDmg: 2,
                cards: []
            },
            inEncounter: true
        }

        this._endEncounter = this.endEncounter.bind(this);
    }

    endEncounter(didPlayerWin, player) {
        console.log('Encounter over, player won: ', didPlayerWin);
        this.setState({ inEncounter: false });
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
        if (this.state.inEncounter) {
            return (
                <div className='World'>
                    <Encounter player={ this.state.player } enemy={ this.state.enemy } endEncounter={ this._endEncounter } />
                </div>
            );
        } else {
            return (
                <div>
                    <p>No more encounters</p>
                </div>
            );
        }
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
