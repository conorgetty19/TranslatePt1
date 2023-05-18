console.log("Do you believe in magic?");
console.log("------------------------");

function DisplaySpellBook(book) {
    console.log(book.Title);
    book.Spells.forEach((aSpell) => {
        console.log(`  ${aSpell.Name}`);
    });
}

function MakeEvilSpellBook(allSpells) {
    var evilBook = {
        Title: "Evil Book",
        Spells: allSpells.filter((spell) => spell.IsEvil),
    };

    return evilBook;
}

function MakeGoodSpellBook(allSpells) {
    var goodBook = {
        Title: "Good Book",
        Spells: allSpells.filter((spell) => !spell.IsEvil),
    };

    return goodBook;
}

function GetAllSpells() {
    var allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyRequired: 5.1,
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyRequired: 2.99,
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyRequired: 12.2,
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyRequired: 100.0,
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyRequired: 2921.5,
        },
    ];

    return allSpells;
}

var allSpells = GetAllSpells();
var goodBook = MakeGoodSpellBook(allSpells);
var evilBook = MakeEvilSpellBook(allSpells);

DisplaySpellBook(goodBook);
console.log();
DisplaySpellBook(evilBook);
