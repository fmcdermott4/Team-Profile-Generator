const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(empName, id, email);
    };
    getRole() {
        console.log("Manager");
    }
}