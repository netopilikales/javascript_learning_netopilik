const fullName = "Josef Nový";
const pointsToSuccess = 75;
const actualPoints = 95;
const redDiploma = 95;

if (actualPoints >= 95) {
  console.log(`${fullName} získal červený diplom!`);
} else if (actualPoints >= 75) {
  console.log(`${fullName} splnil úkol!`);
} else {
  console.log(`${fullName} nesplnil úkol!`);
}
