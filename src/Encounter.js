import React, { Component } from 'react';

import './Encounter.css';

class Encounter extends Component {
    constructor() {
        super();
        this.state = {
            player: { 
                stats: {} 
            },
            enemy: {
                stats: {}
            }
        }
    }

    displayEntity(entity) {
        return (
            <div className='entity-data'>
                <div className='row'>
                    <div className='info-column column'>
                        { entity.name }
                    </div>
                    <div className='stat-name-column column'>
                        Str
                    </div>
                    <div className='stat-value-column column'>
                        { entity.stats.str }
                    </div>
                </div>
                <div className='row'>
                    <div className='info-column column'>
                        Base DMG: { entity.baseDmg }
                    </div>
                    <div className='stat-name-column column'>
                        Def
                    </div>
                    <div className='stat-value-column column'>
                        { entity.stats.def }
                    </div>
                </div>
                <div className='row'>
                    <div className='info-column column'>
                        HP: { entity.stats.hp }
                    </div>
                    <div className='stat-name-column column'>
                        Acc
                    </div>
                    <div className='stat-value-column column'>
                        { entity.stats.acc }
                    </div>
                </div>
                <div className='row'>
                    <div className='info-column column'>
                    </div>
                    <div className='stat-name-column column'>
                        Eva
                    </div>
                    <div className='stat-value-column column'>
                        { entity.stats.eva }
                    </div>
                </div>
                <div className='row'>
                    <div className='info-column column'>
                    </div>
                    <div className='stat-name-column column'>
                        Const
                    </div>
                    <div className='stat-value-column column'>
                        { entity.stats.con }
                    </div>
                </div>
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        const { player, enemy, updatePlayer } = newProps;
        this.setState({ player, enemy, updatePlayer });
    }

    render() {
        return (
            <div>
                { this.displayEntity(this.state.player) }
                { this.displayEntity(this.state.enemy) }
            </div>
        );
    }
}

export default Encounter;
