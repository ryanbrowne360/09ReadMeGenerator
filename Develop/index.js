
// Requires nodes file system commands
const fs = require('fs')

//requires npm inquirer
const inquirer = require('inquirer')

//requires the generate markdown function which is exported from generateMarkdown.js This function will take the value the user inputs when running this program and use it to write the readme doc.
const create = require('./utils/generateMarkdown.js')




const questions = [{
    type: "input",
    name: "title",
    message: "Please create a title for your program"
},
{
    type: "input",
    name: "description",
    message: "Please describe your program in detail"
},
{
    type: "input",
    name: "installation",
    message: "Please describe the steps needed to install your program"
},
{
    type: "input",
    name: "usage",
    message: "How would someone use this program?"
},
{
    type: "input",
    name: "license",
    message: "What licensing may your program require?",
},
{
    type: "input",
    name: "contributors",
    message: "Who was involved in the creation of this program?"
},

{
    type: "input",
    name: "username",
    message: "What username can we use to find you on Github?"
},

{
    type: "input",
    name: "email",
    message: "Please provide your email address"
},

{
    type: "checkbox",
    name: "badges",
    message: "What badges would you like to include in your Readme?",
    choices: [
        'JavaScript',
        'HTML',
        'CSS'
    ]
}
];

async function writeToFile() {
    const userInput = await inquirer.prompt(questions, (err) => console.log(err))


    let badgeType = userInput.badges

    
    function addBadges() {
        if (badgeType == 'JavaScript') {
            userInput.badges = `![JavaScript](https://img.shields.io/github/languages/top/nielsenjared/badmath)`
        }

        else if (badgeType == 'HTML') {
            userInput.badges = `![HTML](https://img.shields.io/badge/HTML-100%25-orange)`
        }

        else if (badgeType == 'CSS') {
            userInput.badges = `![CSS](https://img.shields.io/badge/CSS-100%25-yellowgreen)`
        }
    }
    addBadges()


    fs.writeFile("YourGeneratedReadMe.md", create(userInput), (err) => console.log(err))
    console.log("Thank you using the ReadMe Generator. Your read me file is now generated and should be visible in your local folder.")
}

writeToFile()

