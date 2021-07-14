// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("./node_modules/inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inquirerResponse) {
  return `
  
         ${inquirerResponse.title}

          ## Description 
          ${inquirerResponse.description} 

          ## Table of Contents
          -[Description](#description)
          -[Installation](#installation)
          -[Usage](#usage)
          -[License](#license)
          -[Contribution](#contribution)
          -[tests](#description)
          -[questions] (#questions)

          ## Installation
          ${inquirerResponse.installation}

          ## Usage
          ${inquirerResponse.usage} 

          ## License
          ![badge](https://img.shields.io/badge/license-${inquirerResponse.license}-brightgreen)
          <br />
          ${inquirerResponse.license} 

          ## Contribution
          ${inquirerResponse.contribution}

          ##Tests
          ${inquirerResponse.tests} 

          ##Questions
          ${inquirerResponse.questions}<br/>
          <br/> 
          :octocat: Find me on GitHub: [${inquirerResponse.githubusername}](https://github.com/${inquirerResponse.githubusername})<br />
<br />
✉️ Email me with any questions: ${inquirerResponse.email}<br /><br />
`;
}

export default generateMarkdown;