let num=prompt("Inserisci un numero di secondi da convertire in orario")
let ore = num/3600
let minuti = ((num%3600)/60)
let secondi = num%60

console.log("Il numero di secondi " + num + "in orario è uguale a " + ore + minuti + secondi)