import React, { Component } from 'react';

class Encounter extends Component {
    constructor() {
        super();
        this.state = {
            player: { 
                stats: {} 
            },
            enemy: {}
        }
    }

    componentWillReceiveProps(newProps) {
        const { player, enemy, updatePlayer } = newProps;
        this.setState({ player, enemy, updatePlayer });
    }

    render() {
        return (
            <p>{ Object.keys(this.state.player.stats) }</p>
        );
    }
}

export default Encounter;
