const fs = require(`fs`)
const employeePage = require('./utils/generate-site');

class Employee {
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

module.exports = Employee;