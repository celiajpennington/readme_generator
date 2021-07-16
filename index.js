// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository

// Title of my project -when entered this is displayed
// sections entitled: 
        //Description - when entered displayed
        //Table of Contents -table of contents has links to corresponding section of README
        //Installation, when entered displayed
        //Usage- displayed when enetered
        //License- list of options will be displayed a badge will be added at top and notice is added to the section of the README entitled License that explains which license the application is covered under
        //Contributing - when entered displayed
        //Tests - when entered displayed 
        //Questions Git hubuser name added with alink to my github profile, email address with instructions "you can reach me at"


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation command?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        choices: ["MIT", "Apache", "Boost"],
        name: "license"
    },
    {
        type: "input",
        message: "Who has contributed to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What tests are included?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username? ",
        name: "username"
    },
    {
        type: "input",
        message: "Please provide a link to your github profile ",
        name: "githubProfile"
    },
    {
        type: "input",
        message: "What is your email address ",
        name: "email"
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
 function init() {
   
    inquirer.prompt(questions).then(response => fs.writeFileSync("READMEgenerate.md", generateMarkdown(response)))
  
 }

// // Function call to initialize app
 init();
