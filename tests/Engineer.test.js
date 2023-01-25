const Manager = require('../lib/engineer');

describe('init', () => {
  describe('Initialization', () => {

    // positive test description
    it("should create an object with a properties equal to what is inputed", () => {
      
      const position = 'position';
      const github = 'github';
      const id = 'id';
      const name = 'name';
      const email = 'email';
      const office = 'office'
      const testManager = [position,name,id,email,github,office]
    
      const obj = new Manager(name,id,email,github,office);

      //desired outcome
      expect(Object.values(obj)).toEqual(testManager);
    });

  });
});