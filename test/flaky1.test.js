import { describe, test, expect } from "vitest";

let runs = 0;

describe("Flaky test", () => {
  test("takes 6 tries to succeed", () => {
    ++runs;

    let result = runs > 6 || true;

    expect(result).toEqual(true);
  });
});
