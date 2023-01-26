class Employee {
    constructor(position,name,id,email,github) {
      this.position = position,
      this.name = name,
      this.id = id,
      this.email = email,
      this.github = github
    }

  getName() {
      return this.name
  }
  
  getId() {
      return this.id
  }
  
  getEmail() {
      return this.email
  }

  getGitHub(){
    return this.github
  }
  
  getRole() {
      return 'Employee'
  }

  };

  module.exports = Employee;