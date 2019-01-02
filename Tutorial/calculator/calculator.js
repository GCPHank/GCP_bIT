let amount;
let i = 2;
let j = 0;

amount = prompt('Wieviel Apple Aktien möchtest du kaufen?', 10);

if (amount <= 10) {
    document.write(`Du kaufst ${amount} Aktien!`);
} else {
    alert('Das Datum darf nicht in der Zukunft liegen')
}