import { text } from "express";
import login from "./login.js";

describe("Login Function Testing", () => {

    test('correct username and password ', () => {
        expect(login("admin", "1234")).toBe("Login Successful");
    });

    test("wrong password", () => {
        expect(login("admin", "wrong")).toBe("Invalid Credentials");
    });

    test("wrong username", () => {
        expect(login("user", "1234")).toBe("Invalid Credentials");
    });

    test("empty credentials", () => {
        expect(login("", "")).toBe("Fields required");
    });
});