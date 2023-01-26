const Employee = require("../lib/employee");

test('Employee', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
});

test('name', () => {
    const name = "Dan" 
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Employee("Dan", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Dan@noemail.com";
    const e = new Employee("Dan", 1, email)
    expect(e.email).toBe(email)
});

test('github',() => {
    const user = 'MauritzMaj'
    const e = new Engineer('Dan', 1, 'Dan@noemail.com', user)
    expect(e.github).toBe(user);
 });

test('getName()', () => {
  const name = "Dan" 
  const e = new Employee(name)
  expect(e.getName()).toBe(name)
});

test('getId()', () => {
  const id = 1;
  const e = new Employee("Dan", id)
  expect(e.getId()).toBe(id)
});

test('getEmail()', () => {
  const email = "Dan@noemail.com";
  const e = new Employee("Dan", 1, email)
  expect(e.getEmail()).toBe(email)
});

test('getGitHub()', () =>{
    const gitHub = 'www.github.com/MauritzMaj'
    const e = new Engineer('Dan', 1, 'Dan@noemail.com', gitHub)
    expect(e.getGitHub()).toBe(gitHub);
});

test('getRole()', () => {
  const e = new Employee("Employee")
  expect(e.getRole()).toBe("Employee")
});
