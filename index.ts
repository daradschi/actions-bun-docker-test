console.log("Hello via Bun!");
export function addiere(a: number, b: number): number {
  return a + b;
}

console.log(`Ergebnis: ${addiere(5, 5)}`);


const thisonehere: number = 67
console.log(`Das Ergebnis von 5 + 2 = ${addiere(5,2)}`)