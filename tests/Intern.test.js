const Intern = require('../lib/intern');

describe('init', () => {
  describe('Initialization', () => {

    // positive test description
    it("should create an object with a properties equal to what is inputed", () => {
      
      const position = 'intern';
      const github = 'github';
      const id = 'id';
      const name = 'name';
      const email = 'email';
      const school = 'school'
      const testIntern = [position,name,id,email,github,school]
    
      const obj = new Intern(name,id,email,github,school);

      //desired outcome
      expect(Object.values(obj)).toEqual(testIntern);
    });

  });
});