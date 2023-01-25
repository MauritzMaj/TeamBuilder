const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require( "./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require(  "./lib/Intern");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require(  "./lib/markdown");



const employees = [];
const add = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "continue",
  },
];

const choosePosition = [
  {
    type: "list",
    message: "What is your position?",
    choices: ["Manager","Intern", "Engineer"],
    name: "position",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your position");
      }
      return true;
    },
  },
];
const mainQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your name");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your id?",
    name: "id",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your id");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your email");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your Github username");
      }
      return true;
    },
  },
];
const managerQ = [
  {
    type: "input",
    message: "What is your office number?",
    name: "office",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter you office number");
      }
      return true;
    },
  },
];
const internQ = [
  {
    type: "input",
    message: "Where did you go to school?",
    name: "office",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your school");
      }
      return true;
    },
  },
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! ");
  });
}

const writeFile = util.promisify(writeToFile);


async function init() {
  try {
    var position = await inquirer.prompt(choosePosition);
    var userResponses = await inquirer.prompt(mainQuestions);
    console.log(userResponses);
    console.log (position);
    if (position == "Manager") {
      var managerResponses = await inquirer.prompt(managerQ);
      console.log(Object.values(userResponses));
      let manager = new Manager(
        ...Object.values(userResponses),
        ...Object.values(managerResponses)
      );
      employees.push(manager);
    } else if (position == 'Intern') {
      var internResponses = await inquirer.prompt(internQ);
      let intern = new Intern(
        position,
        ...Object.values(userResponses),
        ...Object.values(internResponses)

      );

      employees.push(intern);
    } else {
      let engineer = new Engineer(
        position,
        ...Object.values(userResponses),
      );
      employees.push(engineer);
    } 
    var cont = await inquirer.prompt(add);
    if (cont.continue == "Yes") {
      init();
    } else {
      const markdown = createCard(employees);
      await writeFile("index.html", markdown);
    }
  } catch (error) {
    console.log(error);
  }
}

function createCard(employees){
  var body = ''  
  for (i in employees){
    console.log(employees[i]);
    body += `        
    <div>

    <cardheader> 
    <h4> Name: ${employees[i].name}</h4>
    </cardheader>

    <ul>
    <li> Position: ${employees[i].position}</li>
    <li> email: <a href = ${employees[i].email}>${employees[i].email}</a></li>
    <li> Github: <a href = ${employees[i].github}>Github.com/${employees[i].github}</a> <li>
    <li> Employee ID: ${employees[i].id}</li>
    </ul>
</div>`
  }

  const cards = generateMarkdown(body)
  return cards
};


init();