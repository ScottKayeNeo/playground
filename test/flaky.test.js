import { describe, test, expect } from "vitest";

describe("Flaky test", () => {
  test("should be flaky", () => {
    const random = Math.random();

    expect(random).toBeGreaterThan(0.8);
  });
});
