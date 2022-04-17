const fs = require('fs');
const inquirer = require(`inquirer`);
const generatePage = require('./utils/generate-site');
const writeFile = require (`./src/page-template`);
const Engineer = require (`./lib/Engineer`);
const Intern = require (`./lib/Intern`);
const Employee = require (`./lib/Employee`);
const Manager = require (`./lib/Manager`)
const promptUser =() => {

return inquirer.prompt ([
    {
        type:`input`,
        name: `name`,
        message:`What is your name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    const managerObject = [

      {
          type: 'input',
          name: 'name',
          message: "What is your name?"
      },
      {
          type: `input`,
          name: 'id',
          message: "Please enter your Id?"
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter your email?"
      },
      {
          type: 'input',
          name: 'github',
          message: "Please enter your gitHub username?"
      }
    
    ]
    

const internObject = [

  {
      type: 'input',
      name: 'name',
      message: "What is your name?"
  },
  {
      type: `input`,
      name: 'id',
      message: "Please enter your Id?"
  },
  {
      type: 'input',
      name: 'email',
      message: "Please enter your email?"
  },
  {
      type: 'input',
      name: 'github',
      message: "Please enter your current School?"
  }

]
const engineerObject = [

  {
      type: 'input',
      name: 'name',
      message: "What is your name?"
  },
  {
      type: `input`,
      name: 'id',
      message: "Please enter your Id?"
  },
  {
      type: 'input',
      name: 'email',
      message: "Please enter your email?"
  },
  {
      type: 'input',
      name: 'github',
      message: "Please enter your gitHub username?"
  }

]);


};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  
  init()