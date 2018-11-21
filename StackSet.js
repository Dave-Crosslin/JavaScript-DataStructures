var ListStack = require('./ListStack.js');
class StackSet{

  constructor(x){
    this.topStack = new ListStack(x);
    this.topStack.count = 1;
  }
  push(x){
    if(this.topStack.count < 10){
      this.topStack.push(x);
    }
    else{
      this.topStack = this.topStack.next;
      this.topStack = new ListStack(x);
    }
  }
  pop(){
    if(this.topStack == null){
      this.topStack = this.topStack.next;
    }
    this.topStack.pop();
  }
  print(){
    let s = this.topStack;
    while(s != null){
      s.print();
      s = s.next;
    }
  }
}

module.exports = StackSet;
