const spellbook = [
    {
        id: 0,
        name: 'Earthquake',
        type: 'damage',
        cost: { str: 1 },
        effect: { damage: 5 }
    },{
        id: 1,
        name: 'Blood Boil',
        type: 'damage',
        cost: { def: 1 },
        effect: { damage: 5 }
    },{
        id: 2,
        name: 'Bolt Throw',
        type: 'damage',
        cost: { acc: 1 },
        effect: { damage: 5 }
    },{
        id: 3,
        name: 'Shadow Strike',
        type: 'damage',
        cost: { eva: 1 },
        effect: { damage: 5 }
    },{
        id: 4,
        name: 'Sap',
        type: 'debuff',
        cost: { acc: 1 },
        effect: { debuffStr: 5 }
    },{
        id: 5,
        name: 'Fraility',
        type: 'debuff',
        cost: { eva: 1 },
        effect: { debuffStr: 5 }
    },{
        id: 6,
        name: 'Bewilder',
        type: 'debuff',
        cost: { acc: 1 },
        effect: { debuffDef: 5 }
    },{
        id: 7,
        name: 'Spore Cloud',
        type: 'debuff',
        cost: { eva: 1 },
        effect: { debuffDef: 5 }
    },{
        id: 8,
        name: 'Haze',
        type: 'debuff',
        cost: { str: 1 },
        effect: { debuffAcc: 5 }
    },{
        id: 9,
        name: 'Dust Devil',
        type: 'debuff',
        cost: { def: 1 },
        effect: { debuffAcc: 5 }
    },{
        id: 10,
        name: 'Sand Trap',
        type: 'debuff',
        cost: { str: 1 },
        effect: { debuffEva: 5 }
    },{
        id: 11,
        name: 'Freeze',
        type: 'debuff',
        cost: { def: 1 },
        effect: { debuffEva: 5 }
    },{
        id: 12,
        name: 'Cauterize',
        type: 'heal',
        cost: { con: 1 },
        effect: { heal: 1 }
    },{
        id: 13,
        name: 'Cauterize',
        type: 'heal',
        cost: { con: 1 },
        effect: { heal: 1 }
    },{
        id: 14,
        name: 'Cauterize',
        type: 'heal',
        cost: { con: 1 },
        effect: { heal: 1 }
    }
];

function getSpells(numSpells) {
    // If asking for more spells than we know, return them all
    if (numSpells >= spellbook.length) {
        return spellbook;
    }

    // Generate unique random numbers
    let spellIndexes = [];
    while (spellIndexes.length < numSpells) {
        let randSpellIndex = Math.floor(Math.random() * spellbook.length);
        if (-1 === spellIndexes.indexOf(randSpellIndex)) {
            spellIndexes.push(randSpellIndex);
        }
    }

    // Use those numbers to generate random spell list
    let spellArray = [];
    spellIndexes.forEach((index) => {
        spellArray.push(spellbook[index]);
    });
    return spellArray;
}

export default getSpells;
