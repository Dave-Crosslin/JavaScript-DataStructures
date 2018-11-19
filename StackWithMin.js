var ListStack = require('./ListStack.js');
class stackWithMin extends ListStack{

  constructor(x){
  super(x);
  this.stackM = new ListStack(x);
  }

  push(x){
    if(x < this.stackM.peek().data){
      this.stackM.push(x);
    }
    super.push(x);
  }

  pop(){
    if(super.pop().data === this.stackM.peek().data){
      this.stackM.pop();
    }
    //why does super.pop() cause removal of 2 elements in main instead of 1?
    //works as is with super.pop() commented out. Expected symmetry with the
    //pattern of the push() method above ^^^ where I had to use super.push()

    //super.pop();
  }
  printMin(){
    this.stackM.print();
  }
}

module.exports = stackWithMin;
