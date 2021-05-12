const Employee = require('./Employee.js');

class Manager entends Employee {
    constructor(empName, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(empName, id, email);
    };
    getRole() {
        console.log("Manager");
    }
}