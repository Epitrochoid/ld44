const spellbook = [
    {
        name: 'Shadow Strike',
        type: 'damage', //'debuff', 'heal'
        cost: { eva: 1 },
        effect: { damage: 5 }
    }
];

function getSpells(numSpells) {
    if (numSpells > spellbook.length) {
        return spellbook;
    }
}

export default getSpells;
