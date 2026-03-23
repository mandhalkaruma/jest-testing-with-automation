import sum from "./sum.js";

describe("test for sum function", () => {
    test("add 2 + 2 is equal 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("add 1 + 2 is equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
})

