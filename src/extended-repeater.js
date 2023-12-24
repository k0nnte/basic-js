const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str !== `string`){
    str = str + ``;
}
if(options.addition !== undefined && typeof options.addition !== `string`){
    options.addition = options.addition + ``;
}





let string = rep(options.addition ? options.addition : null ,options.additionSeparator ? options.additionSeparator : '|' , options.additionRepeatTimes?options.additionRepeatTimes: 0);
let string2;
if(string === null){
string2 = str
}else{
string2 = str + string;
}

return rep(string2,options.separator ? options.separator : '+' , options.repeatTimes ? options.repeatTimes : 0)

}

function rep(str1,str2,kol){
if(kol === 0){
    return str1;
}

const mas = [];
for(let i = 0;i<kol;i++){
    mas.push(str1);

}

return mas.join(str2);
}

module.exports = {
  repeater
};
