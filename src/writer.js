const replace = require('path');
const fs = require('fs');
const utils = require('./utils');
const md = require('./markdown');

const blocks = {
  h1: md.headline(1),
  h2: md.headline(2),
  h3: md.headline(3),
  h4: md.headline(4),
  h5: md.headline(5),
  h6: md.headline(6),
  p: md.paragraph(),
};

const append = (path, block, text) => {
  if (validate(block, text)) {
    return;
  }

  const el = blocks[block];

  if (!el) return;

  const line = `${el}${text}\n`;

  fs.appendFile(path, line, (err) => {
    if (err) throw err;
    utils.successLog('Added');
  });
};

const validate = (block, text) => {
  let hasError = false;

  if (!block) {
    utils.errorLog('Missing block parameter');
    hasError = true;
  }

  if (!Object.keys(blocks).some((el) => el === block)) {
    utils.errorLog(
      'Unrecognized add subcommand, type devnotes help for reference'
    );
    hasError = true;
  }

  if (!text) {
    utils.errorLog('Missing text parameter');
    hasError = true;
  }

  return hasError;
};

module.exports = {
  append,
};
