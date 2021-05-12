const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initilization", () => {
        //Positive test
        it("Should return Manager when getrole() is called", () => {
            const text = "Manager"
            const obj = new Manager();
            expect(obj.getRole()).toEqual(text);
        })
    })
});