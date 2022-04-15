
const Engineer = require(`../lib/Engineer.js`);

test('Creates new Engineer', () => {
const testValue = "bob";
const employee = new Engineer(`bob`, 1, `bob@bob.com`, testValue );
expect(employee.employeeId).toBe(testValue);
    
  })
  
