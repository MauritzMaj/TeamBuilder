const Employee = require("./employee");

class Engineer extends Employee {
  constructor(position,name,id,email,github) {
    super(position,name,id,email,github,);
  }
}
module.exports = Engineer;