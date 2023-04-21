// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
const license = require('./utils/generateMarkdown');


// This is the array of questions that will be asked to the user
 inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username'
        },
        {
            type: 'input',
            message: "What is your project's title?",
            name: 'title'
        },
        {
            type: 'input',
            message: "Description of your project",
            name: 'description'
        },
        {
            type: 'input',
            message: "What are the installation instructions for your project?",
            name: 'installation'
        },
        {
            type: 'input',
            message: "How can your project be used?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "What are the contribution guidelines for your project?",
            name: 'contribution'
        },
        {
            type: 'input',
            message: "What are the test instructions for your project?",
            name: 'test'
        },
        {
            type: 'input',
            message: "What is the best email to contact you at?",
            name: 'email'
        },
        {
            type:'list',
            message:'Which license would you like your project to have?',
            choices:['Apache 2.0 License','GNU','MIT License','BSD2 License'],
            name:'license'
        }
    ])
  
    // This is the function that will write the README file
    .then((data) =>{
        console.log(typeof data)
        renderLicenseBadge(license);
        fs.writeFile("newREADME.md", generateMarkdown(data), err =>{
            err? console.error(err):console.log("Your README has been created")
       
        })
    })


// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err =>{
//         err? console.error(err):console.log("Your README has been created")
//     })
// }

// function to initialize app
function init() {}

// Function call to initialize app
init();
