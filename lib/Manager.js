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
const managerObject = [

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
        message: "Please enter your gitHub username?"
    }

]

module.exports = {Manager, managerObject};