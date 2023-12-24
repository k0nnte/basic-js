const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
   }
  
   const mas = [...arr];
   console.log(mas);
  
   mas.forEach((el,i)=>{
    if(el === '--discard-next'){
      if(mas[i+1] !== undefined){
        mas[i+1] = false;
       
      }
      mas[i] = false;
    }
    if(el === '--discard-prev'){
      
      if(mas[i-1] !== false && mas[i-1] !== undefined){
        mas[i-1] = false;
      }
      mas[i] = false;
    }
    if(el === `--double-next`){
      if(mas[i+1] !== undefined){
        mas[i] = mas[i+1]; 
      }else{
        mas[i] = false
      }
     
    }
    if(el === `--double-prev`){
      if(mas[i-1] !== false && mas[i-1] !== undefined){
        mas[i] = mas[i-1];
      }else{
        mas[i] = false;
      }
    }
   })
  return mas.filter(el =>{
    if(el !== false){
      return el;
    }
  });
}

module.exports = {
  transform
};
