# Readme Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node.js     | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js?](https://developer.mozilla.org/en-US/docs/Glossary/Node.js?)      |   
| inquirer     | [https://www.npmjs.com/package/inquirer/v/8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)      |   
| Javascript    | [https://developer.mozilla.org/en-US/docs/Web/javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |   


## Description

This software tool creates a well-structured README by leveraging the inquirer package to gather user inputs. The input data is then processed and transformed into a README markdown file that follows the conventions of a good README structure.

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation
   run "npm i" in the integrated terminal

   ## Code Highlight
This code generates a license badge image based on the user's chosen license type. The badge is returned as a string of markdown code that can be inserted into a README file. The user can choose between an Apache, GNU, MIT, or BSD2 Licence.

````Java
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0 License') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else if (license === 'GNU') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license === 'MIT License') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'BSD2 License') {
        return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
    } else {
        return ``
    }
}
````

## Learning Points
In this project I learned to use Node.js and its packages to create a command-line application that generates a high-quality README file with sections like Description, Installation, Usage, License, Contributing, Tests, and Questions. Added user input prompts and learned to create badges for licenses, link to GitHub profile, and provide contact information.

## Application's user prompts
![prompts](/assets/imgs/user%20prompts.jpg)

## Result
[newREADME.md](/newREADME.md)
![questions](/assets/imgs/newREADMEimg.jpg)

## Author

@[DidrikLindberg](https://github.com/DidrikLindberg)