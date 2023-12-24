const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
  },
  addLink(value) {
    if(value === undefined){
      this.mas.push(` `);
      return this;
    }
  
    this.mas.push(value);
    return this;
  },
  removeLink(position) {
    if(this.mas[position-1] === undefined){
      this.mas = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.mas.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    for(let i = 0;i<this.mas.length;i++){
      this.mas[i] = `( ${this.mas[i]} )`;
    }
    let a = this.mas;
    this.mas = [];
      return a.join("~~");
  }
};

module.exports = {
  chainMaker
};
