//  Include packages needed for this application
const inquirer = require('inquirer');

const util = require("util");

const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown');
const path = require('path');

//  Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: 'input',
        message: "What is the project about? Give some description?",
        name: "description"
    },

    {
        type: 'input',
        message: "What does the user need to install to run this project?",
        name: "installation"
    },
    {
        type: 'input',
        message: "How is the application used? Give instructions",
        name: "usage"
    },
    {
        type: 'input',
        message: "Do you want to provide some screenshots of your project?",
        name: "screenshot"
    },
    {
        type: 'checkbox',
        message: "What license is being used? (i.e M.I.T)",
        name: "license",
        choices: ["MIT", "APACHE2.0", "Boosr1.0", "none"],


    },

    {
        type: 'input',
        message: "List some feature about your project",
        name: "feature"
    },


    {
        type: 'input',
        message: "Who contributed to this project",
        name: "contributors"
    },


    {
        type: 'input',
        message: "What is your GitHub username?",
        name: "githubusername"
    },
    {
        type: 'input',
        message: "What is your email address",
        name: "email"
    },
    {
        type: 'input',
        message: "What is your name",
        name: "name"
    },
    {
        type: 'input',
        message: "What commands are needed to test this application?",
        name: "testing"
    },
    {
        type: 'input',
        message: "Do you want to ask any question? Please refer contactme section",
        name: "questions"
    },

];

//  Create a function to write README file

function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}
// ///////////////////
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         console.log(fileName);
//         console.log(data);
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("File successfully created");

//         }
//     })
// }



//////////////////////////

//  Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(function (data) {


            writeToFile("README.md", generatorMarkdown(data));
            console.log(data);
            console.log('Successsfully created READEME file');
        })





}
// Function call to initialize app
init();