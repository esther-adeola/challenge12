const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team = []

function getTeam() {

    inquirer.prompt([
        { type: "list", name: "role", message: "What is the role of the team member?", choices: ["Manager", "Engineer", "Intern"] },
        { type: "input", name: "name", message: "What is the name of the team member?" },
        { type: "input", name: "id", message: "What is the id of the team member?" },
        { type: "input", name: "email", message: "What is the email of the team member?" },
    ]).then(
        answer => {
            let { name, id, email, role } = answer
            switch (answer.role) {
                case "Manager": return createManager(name, id, email);
                case "Engineer": return createEngineer(name, id, email);
                case "Intern": return createIntern(name, id, email);
            }
        }
    )
}

createManager = (name, id, email) => {
    inquirer.prompt([
        { type: "input", name: "officeNumber", message: "What is the office number of the team member?" },
    ]).then(
        answer => {
            const manager = new Manager(name, id, email, answer.officeNumber);
            team.push(manager);
            createTeam();
        }
    )
}
createEngineer = (name, id, email) => {
    inquirer.prompt([
        { type: "input", name: "github", message: "What is the git hub of the team member?" },
    ]).then(
        answer => {
            const engineer = new Engineer(name, id, email, answer.github);
            team.push(engineer);
            createTeam();
        }
    )
}
createIntern = (name, id, email) => {
    inquirer.prompt([
        { type: "input", name: "school", message: "What is the school of the team member?" },
    ]).then(
        answer => {
            const intern = new Intern(name, id, email, answer.school);
            team.push(intern);
            createTeam();
        }
    )
}


createTeam = () => {
    inquirer.prompt([
        { type: "confirm", name: "addAnother", message: "Would you like to add another team member?" },
    ]).then(
        answer => {
            if (answer.addAnother) { getTeam(); } else {
                const htmlData = render(team);
                fs.writeFile(outputPath, htmlData, (err) => {
                    if (err) throw err;
                    console.log("Success!");
                });
            }
        }
    )
}

getTeam();
// TODO: Write Code to gather information about the development team members, and render the HTML file.

