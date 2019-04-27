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

  return {attacker: attacker, defender: defender, logMessage: log}
}

export default resolveMelee;
