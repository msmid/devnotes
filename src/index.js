#!/usr/bin/env node

const _ = require('lodash');

const utils = require('./utils');
const methods = require('./methods');

const commands = ['init', 'add', 'help'];

const run = async () => {
  const argv = require('minimist')(process.argv.slice(2));
  const cmd = argv._[0];

  if (_.indexOf(commands, cmd) === -1 && argv._.length) {
    utils.errorLog('Uknown command');
    return;
  }

  switch (cmd) {
    case 'init':
      methods.init();
      break;
    case 'add':
      methods.add(argv._[1], argv._.slice(2).join(' '));
      break;
    case 'help':
      utils.printHeader();
      utils.printHelp();
      break;
  }
};

run();
