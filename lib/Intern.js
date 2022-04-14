const Employee = require(`../lib/Engineer`);
jest.mock(`../lib/Engineer`)


const Employee = require(`../lib/Employee`);

class Intern {
    constructor(employeeName = '') {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.officeNumber = officeNumber
    }
    getEmployeeId() {
        return `${this.employeeId} `;
    }
    getEmail() {
        return`${this.email}`;
    }
    getOffice() {
        return `${this.officeNumber}`
    }
    
}

module.exports = Intern;

