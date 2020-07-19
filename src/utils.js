const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const figlet = require('figlet');
const pkg = require('../package.json');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  getCurrentDirectory: () => {
    return process.cwd();
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  fileExists: (path) => {
    return fs.existsSync(path);
  },

  successLog: (msg) => {
    console.log(chalk.bold.green('\u2714'), chalk.gray(msg));
  },

  errorLog: (msg) => {
    console.log(chalk.bold.red('\u2718'), chalk.gray(msg));
  },

  printHeader: () => {
    console.log(
      chalk.yellow(figlet.textSync('devnotes', { horizontalLayout: 'full' })),
      chalk.bold(pkg.version, '\n')
    );
  },

  printHelp: () => {
    console.log(
      '\n',
      chalk.bold.white('Available commands:\n'),
      chalk.blue('  init'),
      chalk.bold(' .............. '),
      'creates devnotes.md file and add it to .gitignore\n\n',
      chalk.blue('  add'),
      chalk.bold('  .............. '),
      'append text to devnotes.md\n\n'
    );
  },
};
