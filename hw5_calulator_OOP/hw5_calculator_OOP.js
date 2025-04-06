class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const calculation = new Calculator(); //const nemuzu redaklarovat, nemuzu reinicializovat. Calculation je objekt, ktery je inicializovany na new Calculator a nemuzu ho zmenit na nic jineho. Muzu ale menit jeho vlastnosti a metody.

console.log("addition =", calculation.add(14, 41));
console.log("subtraction =", calculation.subtract(174, 32));
console.log("multiplication =", calculation.multiply(47, 50));
console.log("division =", calculation.divide(125, 7));
