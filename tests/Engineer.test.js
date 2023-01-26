const Engineer = require("../lib/Engineer");

test('name', () => {
    const name = "Frank" 
    const e = new Engineer(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Engineer("Frank", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Frank@noemail.com";
    const e = new Engineer("Frank", 1, email)
    expect(e.email).toBe(email)
});

 test('github',() => {
    const user = 'MauritzMaj'
    const e = new Engineer('Frank', 1, 'Frank@noemail.com', user)
    expect(e.github).toBe(user);
 });

 test('getRole()', () =>{
     const role = 'Engineer'
     const e = new Engineer('Frank', 1, 'Frank@noemail.com', 'Engineer')
     expect(e.getRole()).toBe(role);
 });
