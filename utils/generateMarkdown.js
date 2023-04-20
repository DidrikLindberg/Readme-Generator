// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache 2.0 License') {
        return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GNU') {
        return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'MIT License') {
        return `[MIT License](https://opensource.org/licenses/MIT)`
    } else if (license === 'BSD2 License') {
        return `[BSD2 License](https://opensource.org/licenses/BSD-2-Clause)`
    } else {
        return ``
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'Apache 2.0 License') {
        return `This project is licensed under the Apache 2.0 License`
    } else if (license === 'GNU') {
        return `This project is licensed under the GNU`
    } else if (license === 'MIT License') {
        return `This project is licensed under the MIT License`
    } else if (license === 'BSD2 License') {
        return `This project is licensed under the BSD2 License`
    } else {
        return ``
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or [contact me directly](mailto:${data.email}). You can find more of my work at https://github.com/[${data.username}]
  
`;
}

module.exports = generateMarkdown;
