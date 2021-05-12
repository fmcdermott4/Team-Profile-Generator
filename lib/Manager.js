const Employee = require('./Employee');

class Manager entends Employee {
    constructor(empName, id, email, officeNumber){
        this.officeNumber = officeNumber;
        super(empName, id, email);
    };
    getRole() {
        return "Manager"
    };
}