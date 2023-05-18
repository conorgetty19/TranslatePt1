// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

for (let i = 0; i < 10; i++) {
    const die1 = roll()
    const die2 = roll()

    let message = `${toString(die1)} + ${toString(die2)} == ${die1.value + die2.value}`
    if (die1.value === die2.value) {
        message += " DOUBLES!"
    }

    console.log(message)
}

function roll() {
    const dieValue = Math.floor(Math.random() * 6) + 1
    return { value: dieValue }
}

function toString(die) {
    switch (die.value) {
        case 1:
            return "one"
        case 2:
            return "two"
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
        default:
            return "Unknown"
    }
}