const utils = require('./utils');

const headline = (level, text) => {
  if (level < 1 || level > 6) {
    utils.errorLog('Must be 1 - 6');
    return;
  }

  let output = '';
  for (let i = 1; i <= level; i++) {
    output += '#';

    if (i === level) {
      output += ' ';
    }
  }

  return `\n${output} ${text}`;
};

const paragraph = (text) => {
  return `\n${text}`;
};

const link = (text) => {
  return `\n[${text}]()`;
};

module.exports = {
  headline,
  paragraph,
  link,
};
