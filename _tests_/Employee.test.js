const Employee = require(`../lib/Employee`);
jest.mock('../lib/Employee.js')
console.log(new Employee());


test ('Verify Employee name', () => {
    const Employee =   new Employee(``) ;
    expect(player.name).toBe(``)
    expect(employeeName).toHaveProperty(`name`);
    expect(employeeName).toHaveProperty(`employeeId`);
    expect(employeeName).toHaveProperty(`email`);
    expect(employeeName).toHaveProperty(`officeNumber`);
});