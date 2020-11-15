// console.log("test")
console.log("Welkom! Wat is je naam?")
let greeting = prompt("Welkom! Wat is je naam?")
// console.log(greeting)



const numbers = Math.floor(Math.random() * 26);
console.log(numbers)
// Ik heb een functie aangemaakt om een random getal te laten genereren.
let showPrompt = true
while (showPrompt) {
    // Als ik waar is, oftewel niet het goede nummer vraagt console mij weer een nieuw getal te raden.// 
    let askNumber = prompt ("Voer een nummer in "  +  greeting)

    // Is dit vals dan is het nummer geraden
    console.log(askNumber)
    


    if (askNumber == numbers){
        showPrompt = false
        alert("Gefeliciteerd je hebt gewonnen" + greeting);
    }
}


