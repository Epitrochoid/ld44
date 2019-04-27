import constants from './static/constants';

/*
 * determines base combat damage for melee between two entities
 * returns damage
 */
function combatDamage(attacker, defender) {
    return attacker.baseDmg + attacker.stats.str - defender.stats.def;
}

function resolveMelee(attacker, defender) {
    let hitNum = constants.BASE_HIT_NUMBER + attacker.stats.acc - defender.stats.eva + Math.floor((Math.random() * constants.HIT_DICE_SIDES) + 1);
    let damage = combatDamage(attacker, defender);
    let log;
    if (hitNum <= 1) { // Miss
        log = `${attacker.name} fails to land a hit! ${defender.name} received no damage!`;
    } else if (hitNum <= 10 && hitNum >= 2) { // glancing blow
        let glanceDmg = Math.floor(damage*0.5);
        defender.hp = defender.hp - glanceDmg;
        log = `${attacker.name} lands a glancing blow upon ${defender.name}. ${glanceDmg} damage was dealt`;
    } else if (hitNum >=20) { // critical hit
        let critDmg = damage*2;
        defender.hp = defender.hp - critDmg;
        log = `${attacker.name} lands a critical hit! ${critDmg} damage oozes out from ${defender.name}`;
    } else { // hitNum <=19 && hitNum >=11, normal hit
        defender.hp = defender.hp - damage;
        log = `${attacker.name} hits ${defender.name}. ${damage} damage was dealt`;
    }

    return {attacker: attacker, defender: defender, logMessage: log};
}

function resolveSpell(attacker, defender, spell) {
    // Deal with cost first
    if (spell.cost.str) {
        attacker.stats.str = attacker.stats.str - spell.cost.str;
    }
    if (spell.cost.def) {
        attacker.stats.def = attacker.stats.def - spell.cost.def;
    }
    if (spell.cost.acc) {
        attacker.stats.acc = attacker.stats.acc - spell.cost.acc;
    }
    if (spell.cost.eva) {
        attacker.stats.eva = attacker.stats.eva - spell.cost.eva;
    }
    if (spell.cost.con) {
        attacker.stats.con = attacker.stats.con - spell.cost.con;
    }

    // resolve spell effect & flavor text
    let log;
    if (spell.effect.damage) {
        defender.hp = defender.hp - spell.effect.damage;
        log = `${defender.name} is seared for ${spell.effect.damage} magical damage!`;
    }
    if (spell.effect.debuffStr) {
        defender.stats.str = Math.max(defender.stats.str - spell.effect.debuffStr, 0);
        log = `${defender.name} appears to struggle lifting their weapon`;
    }
    if (spell.effect.debuffDef) {
        defender.stats.def = Math.max(defender.stats.def - spell.effect.debuffDef, 0);
        log = `${defender.name} looks confused and is no longer bracing themselves against an attack`;
    }
    if (spell.effect.debuffAcc) {
        defender.stats.acc = Math.max(defender.stats.acc - spell.effect.debuffAcc, 0);
        log = `${defender.name} squints their eyes as they look off to your left`;
    }
    if (spell.effect.debuffEva) {
        defender.stats.eva = Math.max(defender.stats.eva - spell.effect.debuffEva, 0);
        log = `${defender.name} stumbles around as they loose their footing`;
    }
    if (spell.effect.heal) {
        attacker.hp = attacker.stats.con;
        log = "As your wounds close, you feel much better.  Kind of...";
    }
    return {attacker: attacker, defender: defender, logMessage: log};
}
export default {resolveMelee, resolveSpell};
