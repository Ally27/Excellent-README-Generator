//A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    default:
      return "";
  }
}
//Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "(https://www.mozilla.org/en-US/MPL/2.0/";
    default:
      return "none";
  }
}

//A function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return ` ${renderLicenseLink(license)}`;
  } else {
    return " ";
  }
}

function renderTableofContents(Contents) {
  return (
    "## Table of Contents\n" +
    "* [Installation](#installation)\n" +
    "* [Usage](#usage)\n" +
    "* [Description](#description)\n" +
    "* [Contributors](#contributors)\n" +
    "* [Tests](#tests)\n"
  );
}

// A function to generate markdown for README

function generateMarkdown(userData) {
  return `# ${userData.title}\n\n ## Description\n${userData.description}
  \n ${renderTableofContents(userData.Contents)}
  \n## Installation\n${userData.installation}\n ## Usage \n${
    userData.usage
  }\n ## Contributors \n${userData.contributors}\n ## GitHub \n [${
    userData.gitHub
  }](https://github.com/${userData.gitHub}) \n ## Email \n${
    userData.Email
  }\n ## License\n ${renderLicenseSection(
    userData.license
  )}\n ${renderLicenseBadge(userData.license)}
  \n ## Tests \n${userData.tests}`;
}

module.exports = generateMarkdown;
