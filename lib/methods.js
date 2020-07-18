const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const templateDir = path.resolve(path.join(__dirname, 'templates'));
const rootPath = path.dirname(require.main.filename);

const fileName = 'devnotes.md';

const create = () => {
  const path = `${rootPath}/${fileName}`;

  if (fileExists(path)) {
    errorLog(`${fileName} already exists!`);
    return;
  }

  fs.copyFile(`${templateDir}/${fileName}`, path, (err) => {
    if (err) throw err;
    successLog(`${fileName} created!`);
  });

  addToGitIgnore();
};

const addToGitIgnore = () => {
  const path = `${rootPath}/.gitignore`;

  if (!fileExists(path)) {
    fs.writeFile(path, '', (err) => {
      if (err) throw err;
      successLog('.gitignore created');
    });
  }

  fs.appendFile(path, `\n${fileName}`, (err) => {
    if (err) throw err;
    successLog('Added to .gitignore');
  });
};

const fileExists = (path) => {
  return fs.existsSync(path);
};

const successLog = (msg) => {
  console.log(chalk.bold.green('\u2714'), chalk.gray(msg));
};

const errorLog = (msg) => {
  console.log(chalk.bold.red('\u2718'), chalk.gray(msg));
};

module.exports = {
  create,
};
