import { expect, test } from "bun:test";
import { addiere } from "./index.ts";

test("addiere Funktion", () => {
  expect(addiere(2, 3)).toBe(5);
});

test("addiere negative zahlen", () => {
    expect(addiere(-1, -3)).toBe(-4);
});
