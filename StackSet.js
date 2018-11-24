var ListStack = require('./ListStack.js');
class StackSet{

  constructor(){
    this.topStack = new ListStack();
    this.topStack.count = 1;
    this.topStack.index = 0;
    this.topStack.next = null;

  }
  push(x){
    if(this.topStack.count < 10){
      this.topStack.push(x);
      this.topStack.count ++;
    }
    else{
      let newStack = new ListStack();
      newStack.push(x);
      newStack.count = 1;
      newStack.index = this.topStack.index + 1;
      newStack.next = this.topStack;
      this.topStack = newStack;
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
  popAt(x){
    let s = this.topStack;
    while(s != null){
      if(s.index == x){
        s.pop();
        return;
      }
      s = s.next;
    }
  }

}

module.exports = StackSet;
