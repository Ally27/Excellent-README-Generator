// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU License":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla License 2.0":
      return "(https://www.mozilla.org/en-US/MPL/2.0/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userData) {
  return `# ${userData.title}`;
  //here should be the readme information
  //place all types here example (license)
}

module.exports = generateMarkdown;
