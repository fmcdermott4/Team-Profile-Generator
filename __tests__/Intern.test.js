const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initilization", () => {
        //Positive test
        it("Should return Intern when getrole() is called", () => {
            const text = "Intern"
            const obj = new Intern();
            expect(obj.getRole()).toEqual(text);
        })
    })
});