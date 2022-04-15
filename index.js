
const inquirer = require(`inquirer`);
const generatePage = require('./utils/generate-site');
const writeFile = require (`./src/page-template`);
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
  
    {
        type:`list`,
        name: `title`,
        message:`What is your title?`,
        choices: [ `Engineer`, `Intern`, `Finish Building my team`]
    },
    {
        type:`input`,
        name: `name`,
        message:`Provide some information about yourself?`,
        when: ({confirmAbout}) =>  {
            if (confirmAbout) {
                return true;
            } else {
                return false;
            }
        }
    },
    
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