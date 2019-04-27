import React, { Component } from 'react';

class Encounter extends Component {
    constructor() {
        super();
        this.state = {
          player: { stats: {} },
            enemy: {}
        }
    }

    componentDidMount() {
        const { player, enemy } = this.props;
        this.setState({ player, enemy });
    }

    render() {
        return (
            <p>{ Object.keys(this.state.player.stats) }</p>
        );
    }
}

export default Encounter;
