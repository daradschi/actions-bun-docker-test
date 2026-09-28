console.log("Hello via Bun!");
export function addiere(a: number, b: number): number {
  return a + b;
}

console.log(`Ergebnis: ${addiere(5, 5)}`);

export function dividiere(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Teilen durch Null ist nicht erlaubt!");
  }
  return a / b;
}
