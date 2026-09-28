import { expect, test } from "bun:test";
import { addiere, dividiere } from "./index.ts";

test("addiere Funktion", () => {
  expect(addiere(2, 3)).toBe(5);
});

test("addiere negative zahlen", () => {
    expect(addiere(-1, -3)).toBe(-4);
});


test("Dividieren durch Null soll einen Fehler werfen", () => {
    expect(() => dividiere(10,0)).toThrow("Teilen durch Null ist nicht Erlaubt!")
})