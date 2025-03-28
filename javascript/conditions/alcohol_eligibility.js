// alcohol_eligibility.js
// conditions

const actualAge = true;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol!`); // ? Template literal napsání: win: Alt gr (pravý alt) + ý nebo (levý) Alt + 96. Mac: Vedle enteru se shiftem
  //console.log(fullName + " už může pít alkohol"); // * Alternativat k template literals, slučování stringů
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.error("CHYBA: Neplatný věk");
}

//* použití porovnovávacích operátorů
// 7 == "7" // * TRUE
// 7 === "7" // * FALSE
// 7 === 7 // * TRUE
// 7 = 7 // ! CHYBA
