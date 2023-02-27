const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// const generateMarkdown = require('./utils/generateMarkdown');




// array of questions for user
   
const generateREADME = (answers) =>
`#  ${answers.title}

## Description
  ${answers.description}

## Table of contents
My Github is username : ${answers.github}
my email address : ${answers.email}

## Installation
${answers.command}

## Test Run command
${answers.test}


## License
  ${answers.license}
END  `;


inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project`s title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license should your project have?' ,
      choices: ['mit','unlicense','mpl-2.0','ofl-1.1'],
    },
    {
      type: 'input',
      name: 'command',
      message: 'What command should be run to install?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What does the user need to know about using the repository?',
      },
  ])


.then((response) => {
    console.log(response);

    const READMETemplate = generateREADME(response);

    fs.writeFile(`${response.name}.md`, READMETemplate, (error) =>
      error ? console.error(error) : console.log(`Success!`)
    );
});
                