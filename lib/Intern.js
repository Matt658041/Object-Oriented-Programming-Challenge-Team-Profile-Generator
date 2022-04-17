const Employee= require(`../lib/Employee`);

class Intern extends Employee {
    constructor(employeeName , employeeId, email,school) {
        super (emloyeeName, employeeId, email,gitHub)
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.school = school;
        
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
    getSchool() {
        return this.school;
    }
}


module.exports = Intern, internObject;

