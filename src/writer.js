const replace = require('path');
const fs = require('fs');
const utils = require('./utils');
const md = require('./markdown');

const append = (path, block, text) => {
  if (validate(block, text)) {
    return;
  }

  const el = selectBlock(block, text);

  if (!el) return;

  const line = `${el}\n`;

  fs.appendFile(path, line, (err) => {
    if (err) throw err;
    utils.successLog('Added');
  });
};

const selectBlock = (block, text) => {
  let output = null;
  switch (block) {
    case 'h1':
      output = md.headline(1, text);
      break;
    case 'h2':
      output = md.headline(2, text);
      break;
    case 'h3':
      output = md.headline(3, text);
      break;
    case 'h4':
      output = md.headline(4, text);
      break;
    case 'h5':
      output = md.headline(5, text);
      break;
    case 'h6':
      output = md.headline(6, text);
      break;
    case 'p':
      output = md.paragraph(text);
      break;
    case 'a':
      output = md.link(text);
      break;
    case 'check':
    case 'c':
      output = md.checkbox(text);
      break;
    case 'li':
      output = md.listItem(text);
      break;
    case 'br':
      output = md.breakLine();
      break;
    default:
      utils.errorLog(
        'Unrecognized add subcommand, type devnotes help for reference'
      );
      break;
  }

  return output;
};

const validate = (block, text) => {
  let hasError = false;

  if (!block) {
    utils.errorLog('Missing block parameter');
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
