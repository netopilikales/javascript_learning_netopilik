let firstName = "Jiri"; // Deklarace a inicializace promenne firstName
let lastName; // Deklarace, hodnota undefined
lastName = "Kovar"; // Prirazeni hodnoty "Kovar" promenne lastName

// nelze deklarovat jednu promennou 2x... takze zadny let lastName = "Kovar"; neni mozny

console.log(firstName); // Vypise "Jiri"
console.log(lastName); // Vypise "Kovar"

firstName = "Petr"; // Zmena hodnoty promenne firstName
console.log(firstName); // Vypise "Petr"

// * Chování proměnné let

let outside = "VenkovníProměnná"; // ? Promměnná outside vstupuje do bloků v tomto souboru
{
  console.log(outside);
  let inside = "Vnitřní proměnná"; // ? Proměnná inside existuje pouze uvnitř bloku, mimo neexistuje
}
// console.log(inside); // ! CHYBA, proměnná inside neexistuje mimo blok: ReferenceError: inside is not defined

// let lastName = "Novák" // ? Nemůžu udělat, proměnnou deklaruji pouze jednou (jedná se o tzv. redeklaraci, která u let proměnné není umožněna)

// * Chování proměnné var
// ! Var není doporučené používat v nových programech, je zastaralá a může vést k chybám (lidské chyby)!
{
  var insideVar = "Vnitřní Var";
}
console.log(insideVar); // ? Proměnné var můžu použít i mimo blok kódu
var insideVar = "Tak a jsem redeklarovaný";
console.log(insideVar);
insideVar = "Jiná hodnota";
var declaredVar; // ? je možná deklarace bez inicializace

// * Chování proměnné const
//const declaredConst; // ! Chyba, constantu musím vždy inicializovat spolu s deklarací.
const changeConst = "Nejdu změnit";
// changeConst = "Cha cha! Změněno!"; // ! CHYBA: TypeError: Assignment to constant variable.
console.log(changeConst);

{
  const insideConst = "Vnitřní const";
}
// console.log(insideConst); // ! Chyba: ReferenceError: insideConst is not defined
