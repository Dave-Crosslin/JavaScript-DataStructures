var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');

class Stack {
  constructor(x){
  let n = new Node(x, null);
  this.head = n;
  this.stackList = new LinkedList(this.head);
  }

  push(x){
    let n = new Node(x);
    n.next = this.head;
    this.head = n;
  }
  pop(){
    let x = this.head;
    this.head = this.head.next;
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
