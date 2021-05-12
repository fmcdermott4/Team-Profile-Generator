const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initilization", () => {
        //Positive test
        it("Should return Engineer when getrole() is called", () => {
            const text = "Engineer"
            const obj = new Engineer();
            expect(obj.getRole()).toEqual(text);
        })
    })
});