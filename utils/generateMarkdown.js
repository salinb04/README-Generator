/*
 * At least one badge ??
 * Project title
 * Description
 * Table of Contents
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions
 * User GitHub profile picture
 * User GitHub email
 */

var data = {
  title: 'Dummy Title',
  description: 'The quick brown jumped',
  installation: []
}

function generateMarkdown(data) {
  return `# ${data.title}

# Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)


# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contributing
${data.contributing}

# Author
${data.author}

![Profile image](${data.profile_image})
##Email: 
${data.email}


`;
}

module.exports = generateMarkdown;