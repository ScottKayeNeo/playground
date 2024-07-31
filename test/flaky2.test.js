import { describe, test, expect } from "vitest";

let runs = 0;

describe("Another flaky test", () => {
  test("takes only 3 tries to succeed", () => {
    ++runs;

    let result = runs > 3;

    expect(result).toEqual(true);
  });
});
