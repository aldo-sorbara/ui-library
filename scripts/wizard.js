const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const { readdirSync } = require('fs');
const axios = require('axios');

const { BOT_KEY, CHAT_ID } = process.env;

const getDirectories = p => readdirSync(p);
let version;

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Common UI', {
        font: 'Epic',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

const askQuestions = async () => {
  const dir = './src/components/';
  const PLATFORM = {
    type: 'list',
    name: 'PLATFORM',
    message: 'Select the component platform:',
    choices: ['web', 'mobile']
  };
  const platformAnswer = await inquirer.prompt(PLATFORM);
  const COMPONENT = {
    name: 'COMPONENT',
    type: 'list',
    message:
      'What is the name of the component you want to upload? (e.g. button) :',
    choices: getDirectories(`${dir}${platformAnswer.PLATFORM}`)
  };
  const componentAnswer = await inquirer.prompt(COMPONENT);
  const PR = {
    name: 'PR',
    type: 'input',
    message: 'pull request number (e.g. 100):'
  };
  const prAnswer = await inquirer.prompt(PR);
  const tagType = {
    name: 'TAGTYPE',
    type: 'list',
    message: 'what type of changes are this ? (tag mode)',
    choices: ['patch', 'minor', 'major']
  };
  const tagTypeAnswer = await inquirer.prompt(TAGTYPE);
  return {
    ...platformAnswer,
    ...componentAnswer,
    ...prAnswer,
    ...tagTypeAnswer
  };
};

const uploadComponent = (component, platform, tagType) => {
  const filePath = `${process.cwd()}/src/components/${platform}/${component}/*.js`;
  const statusCodes = [
    shell.exec(`bit add ${filePath} --id ${platform}/${component}`),
    shell.exec('bit build'),
    shell.exec(`bit tag ${platform}/${component} --${tagType}`),
    shell.exec(`bit export wenance.common-ui ${platform}/${component}`)
  ];
  version = statusCodes[2].stdout.match(/\d*\.\d*\.\d*/g);
  return statusCodes.find(sc => sc.code !== 0);
};

const message = (hasError, COMPONENT, PLATFORM, PR) => {
  if (hasError) {
    console.log(
      chalk.white.bgRed.bold(
        'Failed! The component could not be uploaded to bit. Fix the errors and try again.'
      )
    );
    return;
  }
  const componentUrl = `https://bitsrc.io/wenance/common-ui/${PLATFORM}/${COMPONENT}`;
  const messageText = `
    New component release !
    ${PLATFORM}/${COMPONENT}@${version ? version[0] : ''}.
    Visitá ${componentUrl} para instalarla.
    related pr: https://github.com/wenance/react-common-core/pull/${PR}
  `;
  console.log(
    chalk.white.bgGreen.bold('Done! Component uploaded to Bit.'),
    componentUrl
  );
  axios
    .get(
      `
    https://api.telegram.org/${BOT_KEY}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(
        messageText
      )}
  `
    )
    .then(_ => console.log('telegram bot was notified !'))
    .catch(_ => {
      console.log(
        chalk.white.bgRed.bold('it was not possible to deliver the message :(')
      );
    });
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { COMPONENT, PLATFORM, PR, TAGTYPE } = answers;

  // upload the component
  const hasError = uploadComponent(COMPONENT, PLATFORM, TAGTYPE);

  // show message info (success or error)
  message(hasError, COMPONENT, PLATFORM, PR);
};

run();
