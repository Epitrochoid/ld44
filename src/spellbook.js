const spellbook = [
    {
        name: 'Earthquake',
        type: 'damage',
        cost: { str: 1 },
        effect: { damage: 5 }
    },{
        name: 'Blood Boil',
        type: 'damage',
        cost: { def: 1 },
        effect: { damage: 5 }
    },{
        name: 'Bolt Throw',
        type: 'damage',
        cost: { acc: 1 },
        effect: { damage: 5 }
    },{
        name: 'Shadow Strike',
        type: 'damage',
        cost: { eva: 1 },
        effect: { damage: 5 }
    },{
        name: 'Sap',
        type: 'debuff',
        cost: { acc: 1 },
        effect: { debuffStr: 5 }
    },{
        name: 'Fraility',
        type: 'debuff',
        cost: { eva: 1 },
        effect: { debuffStr: 5 }
    },{
        name: 'Bewilder',
        type: 'debuff',
        cost: { acc: 1 },
        effect: { debuffDef: 5 }
    },{
        name: 'Spore Cloud',
        type: 'debuff',
        cost: { eva: 1 },
        effect: { debuffDef: 5 }
    },{
        name: 'Haze',
        type: 'debuff',
        cost: { str: 1 },
        effect: { debuffAcc: 5 }
    },{
        name: 'Dust Devil',
        type: 'debuff',
        cost: { def: 1 },
        effect: { debuffAcc: 5 }
    },{
        name: 'Sand Trap',
        type: 'debuff',
        cost: { str: 1 },
        effect: { debuffEva: 5 }
    },{
        name: 'Freeze',
        type: 'debuff',
        cost: { def: 1 },
        effect: { debuffEva: 5 }
    },{
        name: 'Cauterize',
        type: 'heal',
        cost: { con: 1 },
        effect: { heal: 1 }
    },{
        name: 'Cauterize',
        type: 'heal',
        cost: { con: 1 },
        effect: { heal: 1 }
    },{
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
