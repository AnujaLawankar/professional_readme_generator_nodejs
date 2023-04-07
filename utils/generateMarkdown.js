// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'none') {
    return `## This is license link [License](#license)`;

  }
  return "";

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "none") {
    return `## License

    License under the ${license} license`;

  }
  return "";

}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  By ${data.name}
 ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}

 ## Table of Contents

 *  [Installation](#installation)
 *  [Feature](#feature)
 *  [Usage](#usage)
 *  [Screenshot](#screenshot)
 *  [Contributors](#contributors)
 *  [Testing](#testing)
 *  [questions](#questions)



 ${renderLicenseLink(data.license)}
 


 
 ## Features
 ${data.feature}

 ## How to use this application
 ${data.usage}

 ## Contributors
${data.contributors}

## Testing
${data.testing}

## Contact-Me
* Name - ${data.name}
* Email -${data.email}
* GitHub - [${data.githubusername}](https://github.com/${data.githubusername}/)

## Ask Questions
${data.questions}

${renderLicenseSection(data.license)}
  `;
}


module.exports = generateMarkdown;
