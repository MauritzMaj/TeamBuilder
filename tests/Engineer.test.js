const Engineer = require('../lib/engineer');

describe('init', () => {
  describe('Initialization', () => {

    // positive test description
    it("should create an object with a properties equal to what is inputed", () => {
      
      const position = 'Engineer';
      const github = 'github';
      const id = 'id';
      const name = 'name';
      const email = 'email';
      const testEngineer = [position,name,id,email,github]
    
      const obj = new Engineer (name,id,email,github);

      //desired outcome
      expect(Object.values(obj)).toEqual(testEngineer);
    });

  });
});