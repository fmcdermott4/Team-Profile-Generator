class Employee {
    constructor(empName, id, email) {
        this.name = empName;
        this.id = id;
        this.email = email;
    };
    getName() {
        console.log(this.name); 
    };
    getId() {
        console.log(this.id);
    };
    getEmail() {
        console.log(this.email);
    };
};

module.exports = Employee;