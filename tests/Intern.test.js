const Intern = require("../lib/intern");

test('name', () => {
    const name = "Mark" 
    const e = new Intern("Intern", name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Intern("Intern", "Mark", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Mark@noemail.com";
    const e = new Intern("Intern", "Mark", 1, email)
    expect(e.email).toBe(email)
});

test('github',() => {
  const user = 'MauritzMaj'
  const e = new Intern ('Intern', "Mark", 1, 'Dan@noemail.com', user)
  expect(e.github).toBe(user);
});

 test('getRole()', () =>{
     const role = 'Intern'
     const e = new Intern(role ,'Mark', 1, 'Mark@noemail.com', 'MauritzMaj')
     expect(e.getRole()).toBe(role)
 });

 test('getSchool()', () =>{
     const schoolName = 'NYU'
     const e = new Intern('Intern', 'Mark', 1, 'Mark@noemail.com', "MauritzMaj", schoolName)
     expect(e.getSchool()).toBe(schoolName)
 });

