const Manager = require("../lib/manager");

test('name', () => {
    const name = "John" 
    const e = new Manager("Manager", name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Manager('Manager', 'John', id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "John@noemail.com";
    const e = new Manager('Manager', 'John', 1, email)
    expect(e.email).toBe(email)
});

test('github',() => {
  const user = 'MauritzMaj'
  const e = new Manager('Manager', 'John', 1, 'John@noemail.com', user)
  expect(e.github).toBe(user);
});

test('officeNumber', () => {
    const office = 30;
    const e = new Manager('Manager', 'John', 1, 'John@noemail.com', "MauritzMaj", office)
    expect(e.office).toBe(office);
});

test('getRole()', () =>{
    const role = 'Manager'
    const e = new Manager(role , 'John', 1, 'John@noemail.com', 'MauritzMaj', 3035552244)
    expect(e.getRole()).toBe(role);
});