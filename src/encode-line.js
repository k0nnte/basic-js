const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str ===``){
    return str;
}
let count = 1,rez = ``,el = str[0];
for (let i = 1;i<=str.length;i++){
if(str[i] === el){
    count++;
}else{
    if(count ===1 ){
        rez += el;
        el = str[i];
        count = 1;
    }else{
        rez += count+el;
        el = str[i];
        count = 1;
    }
}
}
return rez
}

module.exports = {
  encodeLine
};
