//Requesting access
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter title for the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "describe the process of installation",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for this project",
    choices: ["Apache", "GNU", "MIT", "Mozilla"],
  },
  {
    type: "input",
    name: "contributors",
    message: "List all those who contributed on this project",
  },
  {
    type: "input",
    name: "tests",
    message: "include any tests?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter email address:",
  },
];

// Writes Readme File
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName}`);
  });
}

// Initializing the app
function init() {
  inquirer.prompt(questions).then((userData) => {
    writeToFile("README.md", generateMarkdown({ ...userData }));
  });
}

// Calls to initialize the app
init();
