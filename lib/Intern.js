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
const internObject = [

    {
        type: 'input',
        name: 'name',
        message: "What is your name?"
    },
    {
        type: `input`,
        name: 'id',
        message: "Please enter your Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your current School?"
    }

]

module.exports = {Intern, internObject};

