const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const rez = {};
  domains.forEach(element => {
      const mas = element.split(`.`);
      let str = ``;
      for(let i = mas.length-1;i>=0;i--){
          str += `.${mas[i]}`;
          if(rez.hasOwnProperty(str)){
              rez[str] +=1;
          }else{
              rez[str] = 1;
          }
      }
  });

  return rez
}

module.exports = {
  getDNSStats
};
