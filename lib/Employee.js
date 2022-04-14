class Employee {
    constructor(name = '') {
        this.name = name;
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
    getOfficer() {
        return `${this.officeNumber}`
    }
    
}

module.exports = Employee;