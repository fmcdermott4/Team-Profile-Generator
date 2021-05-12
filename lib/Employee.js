class Employee {
    constructor(empName, id, email) {
        this.name = empName;
        this.id = id;
        this.email = email;
    };
    getName() { return this.name; 
    };
    getId() { return this.id;
    };
    getEmail() { return this.email
    };
}

module.exports = Employee;