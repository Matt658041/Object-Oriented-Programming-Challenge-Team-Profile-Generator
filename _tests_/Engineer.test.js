const Employee = require(`../lib/Employee`);
jest.mock('../lib/Engineer')
console.log(new Employee());


test ('Verify Engineername', () => {
    const engineer =   new Engineer(``) ;
    if (engineer) {
        
    }
    expect(player.name).toBe(``)
    expect(employeeName).toHaveProperty(`name`);
    expect(employeeName).toHaveProperty(`employeeId`);
    expect(employeeName).toHaveProperty(`email`);
    expect(employeeName).toHaveProperty(`officeNumber`);
});