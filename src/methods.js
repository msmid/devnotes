const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');

const utils = require('./utils');
const writer = require('./writer');

const templateDir = path.resolve(path.join(__dirname, 'templates'));
const currentPath = utils.getCurrentDirectory();

const fileName = 'devnotes.md';

// Init method
const init = () => {
  const path = `${currentPath}/${fileName}`;
  const packagePath = `${currentPath}/package.json`;

  if (utils.fileExists(path)) {
    utils.errorLog(`${fileName} already exists!`);
    return;
  }

  fs.copyFile(`${templateDir}/${fileName}`, path, (err) => {
    if (err) throw err;
    utils.successLog(`${fileName} created!`);
  });

  if (utils.fileExists(packagePath)) {
    const pkg = require(packagePath);
    replaceInFile({
      files: path,
      from: /{{NAME}}/g,
      to: pkg.name,
    });
  }

  addToGitIgnore();
};

// Add method
const add = (block, text) => {
  const path = `${currentPath}/${fileName}`;

  if (!utils.fileExists(path)) {
    utils.errorLog('devnotes.md does not exists. Create one with init command');
    return;
  }

  writer.append(path, block, text);
};

const addToGitIgnore = () => {
  const path = `${currentPath}/.gitignore`;

  if (!utils.fileExists(path)) {
    fs.writeFile(path, '', (err) => {
      if (err) throw err;
      utils.successLog('.gitignore created');
    });
  }

  fs.appendFile(path, `\n/${fileName}`, (err) => {
    if (err) throw err;
    utils.successLog('Added to .gitignore');
  });
};

const replaceInFile = (options) => {
  try {
    replace.sync(options);
  } catch (error) {
    utils.errorLog('Error occurred:', error);
  }
};

module.exports = {
  add,
  init,
};
