import sum from "./sum.js";

describe("test for sum function", () => {
    test("add 2 + 2 is equal 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("add 1 + 2 is equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("array test", () => {
        expect([1,2,3]).toContain(2);
    });

    test("object test", () => {
        expect({a:1}).toEqual({a:1});
    });
    test("truthy test", () => {
        expect(1).toBeTruthy();
    });
});

