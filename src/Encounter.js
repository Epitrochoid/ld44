import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

import './Encounter.css';
import { resolveMelee, resolveSpell } from './combat';
import getSpells from './spellbook';

class Encounter extends Component {
    constructor() {
        super();
        this.state = {
            player: {
                stats: {}
            },
            enemy: {
                stats: {}
            },
            enableAction: true,
            combatLog: []
        }

        this._displayActions = this.displayActions.bind(this);
        this._attack = this.attack.bind(this);
        this._draw = (...args) => this.draw(...args);
    }

    displayActions() {
        return (
            <div className='button-box'>
                <AwesomeButton
                    type='primary'
                    // cssModule={ AwesomeButtonStyles }
                    onPress={ this._attack }
                >
                    Attack
                </AwesomeButton>
                <AwesomeButton
                    type="secondary"
                    onPress={ this._draw }
                >
                    Draw
                </AwesomeButton>
            </div>
        )
    }

    attack() {
        console.log('In attack')
        if (this.state.enableAction) {
            const newVals = resolveMelee(this.state.player, this.state.enemy);
            console.log('!!', newVals);
            const newLog = this.addLogMessage(this.state.combatLog, newVals.logMessage);
            this.setState({ player: newVals.attacker, enemy: newVals.defender, enableAction:false, combatLog: newLog });
        }
    }

    draw() {
        console.log('draw');
        const { player, updatePlayer } = this.state;
        updatePlayer({
            ...player,
            cards: [...getSpells(3)]
        });
    }

    addLogMessage(log, newMessage) {
        log.push(newMessage);
        while (log.length > 20) {
            log.shift();
        }
        return log;
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
                        HP: { entity.hp }
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
                { this.displayActions() }
                <Hand cards={this.state.player.cards} />
                <CombatLog logs={this.state.combatLog} />
            </div>
        );
    }
}

const Hand = ({cards=[]}) => (
    <div className="hand">
        {cards.map(card => (
            <div className="card" key={card.id}>
                <div className="title">{card.name}</div>
                <div className="spacing">
                    <strong>Cost:</strong> {costString(card.cost)}<br/>
                    <strong>Effect:</strong> {effectString(card.effect)}<br/>
                </div>
                <button className="action">Play!</button>
            </div>
        ))}
    </div>
);

const CombatLog = ({logs=[]}) => (
    <div className="log-container">
        Combat Log:
        {logs.map(log => (
            <div className="log-message">
                {log}
            </div>
        ))}
    </div>
);

function costString(cost) {
    let statStrings = [];
    if (cost.str) {
        statStrings.push(`-${cost.str} STR`);
    }
    if (cost.def) {
        statStrings.push(`-${cost.def} DEF`);
    }
    if (cost.acc) {
        statStrings.push(`-${cost.acc} ACC`);
    }
    if (cost.eva) {
        statStrings.push(`-${cost.eva} EVA`);
    }
    if (cost.con) {
        statStrings.push(`-${cost.con} CON`);
    }
    return statStrings.join(', ');
}

function effectString(effect) {
    let effectStrings = [];
    if (effect.damage) {
        effectStrings.push(`Deals ${ effect.damage} magical damage`);
    }
    if (effect.debuffStr) {
        effectStrings.push(`Lowers enemy STR by ${effect.debuffStr}`);
    }
    if (effect.debuffDef) {
        effectStrings.push(`Lowers enemy DEF by ${effect.debuffDef}`);
    }
    if (effect.debuffAcc) {
        effectStrings.push(`Lowers enemy ACC by ${effect.debuffAcc}`);
    }
    if (effect.debuffEva) {
        effectStrings.push(`Lowers enemy EVA by ${effect.debuffEva}`);
    }
    if (effect.heal) {
        effectStrings.push(`Heals your HP back to full`);
    }
    return effectStrings.join('<br/>');
}

export default Encounter;
