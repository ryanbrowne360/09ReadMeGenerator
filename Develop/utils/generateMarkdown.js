// function to generate markdown for READMEad


function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Github Username](#username)
  - [Email Address](#email address)
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

//$(#addtoendofreadme)



module.exports = generateMarkdown;






