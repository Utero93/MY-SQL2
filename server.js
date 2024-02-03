// Import dependencies
const inquirer = require('inquirer');
const table = require('table');
const util = require('./db/dbUtility');
const db = require('./db/db');
const cfonts = require('cfonts');

// Ensure the connection is established before calling init
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the company database.');
    init();
  }
});

// Function to create a styled title
const createTitle = () => {
  cfonts.say(' Employee Tracker ', {
    font: 'shade', // You can choose a different font style
    align: 'center', // define text alignment
    colors: ['system', 'cyan'], // define all colors
    background: 'transparent', // define background color
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', //define how many chars can be on a line
    gradient: false, // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
  });
};

// Call the function to create the title
createTitle();



// init function
const init = () => {
  inquirer
  .prompt([
    {
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "Add Department",
        "View All Roles",
        "Add Role",
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View Employees by Manager",
        "View Employees by Department",
        "Delete Employee",
        "Delete Role",
        "Delete Department",
        "View Utilized Budget by Department",
        "Exit"
      ]
    }
  ])
  .then((answers) => {
    switch (answers.start){

      case "View All Departments":
        // view departments function
        util.viewAllDepartments(init);
        break;

      case "Add Department":
        // add department function
        util.addDepartment(init);
        break;

      case "View All Roles":
        // view roles function
        util.viewAllRoles(init);
        break;   

      case "Add Role":
        // Add role function
        util.addRole(init);
        break;

      case "View All Employees":
        // view employees function
        util.viewAllEmployees(init);
        break;

      case "Add Employee":
        // add employee function
        util.addEmployee(init);
        break;
      
      case "Update Employee Role":
        // update role function
        util.updateEmployeeRole(init);
        break;

      case "Update Employee Manager":
        // update role function
        util.updateEmployeeManager(init);
        break;
      
      case "View Employees by Manager":
        // view employee by manager function
        util.viewEmployeesByManager(init);
        break;

      case "View Employees by Department":
        // view employees by deparment function
        util.viewEmployeesByDepartment(init);
        break;
      
      case "Delete Employee":
        //delete employee function
        util.deleteEmployee(init);
        break;

      case "Delete Role":
        //delete role function
        util.deleteRole(init);
        break;

      case "Delete Department":
        // delete department function
        util.deleteDepartment(init);
        break;
      
      case "View Utilized Budget by Department":
        // view budget function
        util.viewBudgetByDepartment(init);
        break;

      case "Exit":
        // end connection
        db.end();
        console.log("Bye!");
        break;
    }
   
  })
}