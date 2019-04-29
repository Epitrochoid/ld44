import React, { Component } from 'react';
import './App.css';

import Encounter from './Encounter';

class World extends Component {
    constructor() {
        super();
        this.state = {
            player: {
                stats: {},
                baseDmg: 2,
                cards: []
            },
            enemy: {
                id: 0
            },
            inEncounter: false,
            isGameOver: false
        }

        this._endEncounter = this.endEncounter.bind(this);
    }

    endEncounter(didPlayerWin, newPlayer) {
        console.log('Encounter over, player won: ', didPlayerWin, newPlayer);
        this.setState({ inEncounter: false, isGameOver: !didPlayerWin, player: newPlayer });
    }

    startNewEncounter() {
        const newEnemy = this.randomEnemy();
        newEnemy.id = this.state.enemy.id + 1;
        this.setState({ enemy: newEnemy, inEncounter: true });
    }

    newPlayer() {
        const reborn = {
            name: 'Player',
            stats: {
                acc: 10,
                eva: 10,
                str: 10,
                def: 10,
                con: 10
            },
            baseDmg: 2,
            hp: 10,
        }
        return reborn;
    }

    randomEnemy() {
        const newEnemy = {
            name: 'Reaper',
            stats: {
                acc: (Math.floor((Math.random() * 4) + 8)),
                eva: (Math.floor((Math.random() * 4) + 8)),
                str: (Math.floor((Math.random() * 4) + 8)),
                def: (Math.floor((Math.random() * 4) + 8)),
                con: 10
            },
            baseDmg: (Math.floor((Math.random() * 2) + 1)),
            hp: 10
        }
        return newEnemy;
    }

    startNewGame() {
        const playerInit = this.newPlayer();
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
            hp: 10,
            id: 1
        };
        this.setState({ enemy: testEnemy, inEncounter: true, isGameOver: false });
    }

    componentDidMount() {
        this.startNewGame();
    }

    render() {
        if (this.state.inEncounter) {
            console.log('In encounter with eneemy: ', this.state.enemy);
            return (
                <div className='World'>
                    <Encounter player={ this.state.player } enemy={ this.state.enemy } endEncounter={ this._endEncounter } key={ this.state.enemy.id }/>
                </div>
            );
        } else {
            if (this.state.isGameOver) {
                return (
                    <div>
                        <p>You failed</p>
                        <button onClick={()=>this.startNewGame()}>Try again?</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>Another one bites the dust</p>
                        <button onClick={()=>this.startNewEncounter()}>Keep going</button>
                    </div>
                );
            }
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
