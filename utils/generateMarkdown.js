

const inquirer = require("inquirer");

// Function that returns license badge based on user's selection
l
function renderLicenseBadge(license) {
 
 if (license === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if (license === 'Apache') {
  return  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (license === 'Boost') {
  return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
 }
}
//Function that returns a link based on what license the user has selected
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt'
  } else if (license === 'Apache') {
    return ` https://www.apache.org/licenses/LICENSE-2.0.txt`
  } else if (license === 'Boost'){
    return `www.boost.org/LICENSE_1_0.txt`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(inquirerResponse) {
  return `
# ${inquirerResponse.title} 
${renderLicenseBadge(inquirerResponse.license)}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution](#contribution)
6. [Questions](#questions)

## Description
${inquirerResponse.description}
## Installation 
\`\`\` ${inquirerResponse.installation} \`\`\`
## Usage
${inquirerResponse.usage}
## License 
This application is covered under ${inquirerResponse.license} license <br>
${renderLicenseLink(inquirerResponse.license)}
## Contribution
${inquirerResponse.contribution}
## Questions
If you have any questions you can reach me at: <br>
${inquirerResponse.username} <br>
<a href = '${inquirerResponse.githubProfile}'> ${inquirerResponse.githubProfile} </a> <br>
or
<a href = '${inquirerResponse.email}' > ${inquirerResponse.email} </a>
`;
}

module.exports = generateMarkdown;
