const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const renderArray = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//const allEmployees = [];

const makingTeam = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Do you need a manager?",
                choices: ["yes", "no"],
                name: "manager"
            },
            {
                type: "input",
                message: "what is the manager's name?",
                name: "name"
             },
             {
                 type: "input",
                 message: "What is the id?",
                 name: "id"
             },
             {
                 type: "input",
                 message: "What is the manager's office number?",
                 name: "officeNumber"
             }

        ])
        .then(answer => {
            if (answer.manager === "yes") {
                addEmployee();
            }


        })

}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which employee would you like to add?",
                choices: ["Engineer", "Intern"],
                name: "employee"
            }
        ])
        .then(answer => {
            if (answer.employee === "Engineer") {
                console.log("Engineer")
                addEngineer();
            }
        })
        .then(answer => {
            if(answer.employee === "Intern") {
                addIntern();
            }
        })
}
const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the engineer's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the engineer's email",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "githubUsername"
            }
        ])

}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the intern's ID",
                name: "id"

            },
            {
                type: "input",
                message: "What is the intern's email",
                name: "email"
            },
            {
                type: "input",
                message: "What school did the intern attend?",
                name: "school"
            }

        ])

}


const buildTeam = () => {

    const html = render(renderArray);
    fs.writeFile(outputPath, html, err => {
        if (err) throw err;
        console.log("success!");
    })

}

makingTeam();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
