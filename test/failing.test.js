import { describe, test, expect } from "vitest";

describe("Failing test", () => {
  test("will never succeed", () => {
    expect(false).toEqual(true);
  });
});
