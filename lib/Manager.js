const Employee = require(`../lib/Employee`);



class Manager  extends Employee {
    constructor(employeeName , employeeId, email,gitHub) {
        super (emloyeeName, employeeId, email,gitHub)
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.gitHub = gitHub;
        
    }
    getEmployeeName () {
        return this.employeeName;
    }
    getEmployeeId() {
        return this.employeeId;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.gitHub;
    }
}


module.exports = Manager, managerObject;