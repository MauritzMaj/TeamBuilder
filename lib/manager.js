const Employee = require("./Employee");

class Manager extends Employee {
  constructor(position,name,id,email,github,office) {
    super(position,name,id,email,github,);
    this.office = office;
  }
}
module.exports = Manager;