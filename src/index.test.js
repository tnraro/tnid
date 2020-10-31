describe("tnid", () => {
    const tnid = require("./index");

    test("should be done without error", () => {
        expect(tnid().length).toBe(20);
        expect(tnid(4).length).toBe(16);
        expect(tnid(3).length).toBe(12);
        expect(tnid(2).length).toBe(8);
        expect(tnid(1).length).toBe(4);
        expect(tnid(26).length).toBe(104);
    });

    test("should be throw error", () => {
        expect(() => tnid(0)).toThrow();
        expect(() => tnid(-1)).toThrow();
        expect(() => tnid(-53)).toThrow();
    });
});