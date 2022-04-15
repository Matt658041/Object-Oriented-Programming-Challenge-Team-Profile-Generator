const Employee= require(`../lib/Employee`);
class Employee {
    constructor(employeeName, employeeId, email, gitHub) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.gitHub = gitHub;
    }
    getEmployeeName() {
        return this.employeeName;
    }
    getEmployeeId() {
        return this.employeeId;
    }
    getEmail() {
        return`${this.email}`;
    }
    getGitHub() {
        return this.gitHub;
    }
    
}

module.exports = Employee;