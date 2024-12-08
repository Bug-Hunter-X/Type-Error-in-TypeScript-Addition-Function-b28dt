function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  return a + b;
}

const result1 = addSafe(5, 10); //Correct
const result2 = addSafe(5, parseInt("10")); //Correct type assertion
//const result3 = add(5, "10"); // Type Error