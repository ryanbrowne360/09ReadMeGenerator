const endOfReadme = "*Thank you for your interest. This document was created using the **[ReadMe Generator](https://github.com/ryanbrowne360/09ReadMeGenerator.git)**";

// function to generate markdown for READMEad
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licensing)
  - [Contributors](#contributors)
  - [Github Username](#github)
  - [Email Address](#email)
  - [Badges](#badges)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licensing

  ${data.license}

  ## Contributors

  ${data.contributors}

  ## Github Username

  ${data.username}

  ## Email Address

  ${data.email}

  ## Badges

  ${data.badges}

  

`;

}






module.exports = generateMarkdown;







