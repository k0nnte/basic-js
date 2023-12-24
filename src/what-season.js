const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!date instanceof Date) {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const mouth = date.getMonth();
  if ((mouth >= 0 && mouth < 2) || mouth === 11) {
    return `winter`;
  }
  if (mouth > 1 && mouth < 5) {
    return `spring`;
  }
  if (mouth > 4 && mouth < 8) {
    return `summer`;
  }
  if (mouth > 7 && mouth < 11) {
    return `fall`;
  }
}

module.exports = {
  getSeason
};
