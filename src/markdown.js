const utils = require('./utils');

const headline = (level) => {
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

  return `\n${output} `;
};

const paragraph = () => {
  return '\n';
};

module.exports = {
  headline,
  paragraph,
};
