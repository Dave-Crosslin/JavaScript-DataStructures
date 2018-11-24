var ListStack = require('./ListStack.js');

class Queue{
  constructor(){
    this.s1 = new ListStack();
    this.s2 = new ListStack();
  }

  enqueue(x){
    this.s1.push(x);
  }
  dequeue(){
            if(this.s2.head === null){
              while(!this.s1.isEmpty){
                let n = this.s1.pop();
                this.s2.push(n.data);
              }
              return this.s2.pop();
            }
            return this.s2.pop();
          }
  print(){
    this.s2.print();
    this.s1.print();
  }
  printS1(){
    this.s1.print();
  }
  printS2(){
    this.s2.print();
  }
}

module.exports = Queue;
