const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, id, email, school) {
        this.school = school;
        super(empName, id, email);
    };
    getRole() { 
        console.log("Intern");
    };
}