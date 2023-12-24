const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let min,max;
  if(s1.length<s2.length){
   min = s1.split(``);
   max = s2.split(``);
  }else{
   min = s2.split(``);
   max = s1.split(``);
  }

  for(let i = 0;i<min.length;i++){
   const a = max.indexOf(min[i]);
   if(a !== -1){
       max.splice(a,1);
       count++;
   }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
