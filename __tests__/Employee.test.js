const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initilization", () => {
        //Positive test
        it("Should return Employee when getrole() is called", () => {
            const text = "Employee"
            const obj = new Employee();
            expect(obj.getRole()).toEqual(text);
        })
    })
});