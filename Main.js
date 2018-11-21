var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');
var Extension = require('./helperFunctions.js');
var ListStack = require('./ListStack.js');
var ArrayStack = require('./ArrayStack.js');
var stackWithMin = require('./StackWithMin.js');
var StackSet = require('./StackSet.js')
let ext = new Extension();

var n1 = new Node(5);
var n2 = new Node(7);
var n3 = new Node(2);
var n4 = new Node(13);
var n5 = new Node(1);
var n6 = new Node(27);
var n7 = new Node(3, null);
//second head, two intersecting lists
var n1b = new Node(2);
n1b.next = n3;

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

var listA = new LinkedList(n1);
var listB = new LinkedList(n1b);

/*let result = ext.getIntersectingNode(listA, listB);
console.log(result);*/

//------------------------------------------------------------------
//stacks and queues
let s = new StackSet(3);
for(let i = 0; i < 13; i++){
  s.push(i);
}
s.print();
s.pop();
console.log('--------');
s.print();
