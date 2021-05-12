const Employee = require('./Employee');

class Engineer entends Employee {
    constructor(empName, id, email, gitHub){
        this.gitHub = gitHub;
        super(empName, id, email);
    };
    getRole() { 
        return "Engineer"
    };
}