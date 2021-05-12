const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, id, email, gitHub) {
        this.gitHub = gitHub;
        super(empName, id, email);
    };
    getRole() { 
        console.log("Engineer");
    };
}