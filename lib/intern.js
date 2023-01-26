const Employee = require("./employee");

class Intern extends Employee {
  constructor(position,name,id,email,github,school) {
    super(position,name,id,email,github,);
    this.school = school;
  }


getSchool(){
  return this.school
}

getRole() {
return this.position
}
};

module.exports = Intern;
