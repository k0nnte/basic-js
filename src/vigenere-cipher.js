const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool){
    this.bool = bool;
    this.alf = `abcdefghijklmnopqrstuvwxyz`;
    
  }
  encrypt(str1,str2) {
    if(str1 === undefined || str2 === undefined){
      throw new Error("Incorrect arguments!");
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    while(str1.length>str2.length){
      str2 += str2;
    }
    let rez = str1.split(``);
    let it = 0;
   for(let i = 0;i<rez.length;i++){
    if(rez[i] >= 'a' && rez[i] <= 'z'){
      let q =  this.alf.indexOf(rez[i]);
      let w = this.alf.indexOf(str2[it]);
      if((q + w) > 25){
        rez[i] = this.alf[(q + w)-26];
      }else{
        rez[i] = this.alf[(q +w)];
      }
      it++;
    }
   }
   if(this.bool === true || this.bool === undefined){
    return rez.join(``).toUpperCase();
   }else{
    return rez.reverse().join(``).toUpperCase();
   }
  }
  decrypt(str1,str2) {
    if(str1 === undefined || str2 === undefined){
      throw new Error("Incorrect arguments!");
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    while(str1.length>str2.length){
      str2 += str2;
    }
    let rez = str1.split(``);
    let it = 0;
    for(let i = 0;i<rez.length;i++){
      if(rez[i] >= 'a' && rez[i] <= 'z'){
        let q =  this.alf.indexOf(rez[i]);
        let w = this.alf.indexOf(str2[it]);
        if((q - w) <0){
          rez[i] = this.alf[(q - w)+26];
        }else{
          rez[i] = this.alf[(q - w)];
        }
        it++;
      }
     }
     if(this.bool === true || this.bool === undefined){
      return rez.join(``).toUpperCase();
     }else{
      return rez.reverse().join(``).toUpperCase();
     }
  }
}

module.exports = {
  VigenereCipheringMachine
};
