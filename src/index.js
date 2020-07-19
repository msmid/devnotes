#!/usr/bin/env node

const clear = require('clear');
const _ = require('lodash');

const utils = require('./utils');
const methods = require('./methods');

clear();

const commands = ['init', 'add', 'help'];

const run = async () => {
  const argv = require('minimist')(process.argv.slice(2));
  const cmd = argv._[0];

  console.log(argv);

  if (_.indexOf(commands, cmd) === -1 && argv._.length) {
    utils.errorLog('Uknown command');
    return;
  }

  switch (cmd) {
    case 'init':
      methods.init();
      break;
    case 'add':
      methods.add(argv._[1], argv._[2]);
      break;
    case 'help':
      utils.printHeader();
      utils.printHelp();
      break;
  }
};

run();
