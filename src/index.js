#!/usr/bin/env node

const pkg = require('../package.json');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const _ = require('lodash');

const methods = require('./methods');

clear();

console.log(
  chalk.yellow(figlet.textSync('devnotes', { horizontalLayout: 'full' })),
  chalk.bold(pkg.version, '\n')
);

const commands = ['start', 'help'];

const run = async () => {
  const argv = require('minimist')(process.argv.slice(2));
  const cmd = argv._[0];

  if (_.indexOf(commands, cmd) === -1 && argv._.length) {
    console.log(chalk.bold.red('Uknown command'));
    return;
  }

  switch (cmd) {
    case 'start':
      methods.create();
      break;
    case 'help':
      printHelp();
      break;
  }
};

const printHelp = () => {
  console.log(
    '\n',
    chalk.bold.white('Available commands:\n'),
    chalk.blue('  start'),
    chalk.bold(' .............. '),
    'creates devnotes.md file and add it to .gitignore\n\n'
  );
};

run();
