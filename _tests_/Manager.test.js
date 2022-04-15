const { Manager } = require('../lib/Manager');

test('Creates new Manager', () => {
    const employee = new Manager('John Smith', 1234, 'john@smith.com', 1234567890);

    expect(employee.employeeName).toBe("John Smith");
    expect(employee.employeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.gitHub).toEqual(expect.any(Number));
})

test('Checks all methods for Manager class', () => {
    const employee = new Manager('John Smith', 1234, 'john@smith.com', 1234567890);

    expect(employee.getName()).toBe(employee.employeeName);
    expect(employee.getId()).toBe(employee.employeeId);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.github);
    expect(employee.getRole()).toBe('Manager');
})
