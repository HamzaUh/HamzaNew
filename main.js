
let nombre1 = 10;
let nombre2 = 5;
let somme = nombre1 + nombre2;
console.log("la somme site : " + somme);


let a = 10;
let b = 3;
console.log(a+b); // 13
console.log(a%b); // 1


console.log(5 > 2); // true
console.log(5 == "5"); // true (comparaison de valeur)
console.log(5 === "5"); // false (comparaison stricte)


// FONCTIONS SIMPLES

function direbonjour() {
    console.log("bonjour !");
}
direbonjour(); // affiche "bonjour !"


function saluer(nom) {
    console.log("bounjor" + nom + " !");
}
saluer("hamza"); // affiche "bonjour hamza !"


function addition(a, b){
    return a + b;
}
let resultat = addition(4, 6);
console.log(resultat); // 10


function addition(a, b) {
    return a + b;
}
let sommes = addition(8, 5);
console.log("la somme est : " + sommes);


//CONDITIONS ET LOGIQUE BOOLEENN

let age = 20;

if (age < 18){
    console.log("vous etes mineur.");
} else if (age === 18) {
    console.log("vous venez d'atteindre la majorite !");
}else {
    console.log("vous etes majeur.");
}


let note = 18;

if (note >= 20) {
    console.log("excellent !");
} else if (note >= 10) {
    console.log("bien, tu as la moyenne.");
} else {
    console.log("en dessous de la moyenne.");
}


let jour = "lundi";

switch (jour){
    case "lundi":
        console.log("debut de semaine !");
        break;
        case "vendrode":
            console.log("presque le week-end !");
            break;
            default:
                console.log("jour standart.")
}


//BOUCLES : FOR, WILE, BREAK

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // sauter le 5
    console.log("nombre : " + i);
}


for (let i = 1; i <= 5; i++){
    console.log("iteration n° " + i);
}


let compteur = 1;
while (compteur <= 3) {
    console.log("compteur : " + compteur);
    compteur++;
}


let x = 0;
do {
    console.log("valeur de x : ");
    x++;
} while ( x < 2);

