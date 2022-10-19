// Using a for loop.
/*
function writeCards(names, event) {
    const writtenCards = [];
    for (let i = 0; i < names.length; i++) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return writtenCards;
}
*/

// Using a for of loop.
function writeCards(names, event) {
    const writtenCards = [];
    for (let name of names) {
        writtenCards.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return writtenCards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}