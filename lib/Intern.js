const Employee = require('./Employee');

class Intern entends Employee {
    constructor(empName, id, email, school) {
        this.school = school;
        super(empName, id, email);
    };
    getRole() { 
        console.log("Intern");
    };
}