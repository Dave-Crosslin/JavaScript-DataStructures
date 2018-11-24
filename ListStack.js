var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');

class Stack {
  constructor(){
  this.isEmpty = true;
  this.head = null;
  this.stackList = new LinkedList();
  }

  push(x){
    let n = new Node(x);
    n.next = this.head;
    this.head = n;
    this.isEmpty = false;
  }
  pop(){

    let x = this.head;
    this.head = this.head.next;
    if(this.head === null){
      this.isEmpty = true;
    }
    return x;
  }
  peek(){
    return this.head;
  }
  print(){
    let node = this.head;
    while(node !== null){
      console.log(node.data);
      node = node.next;
    }
  }
}

module.exports = Stack;
