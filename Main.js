var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');

var n1 = new Node(5);
var n2 = new Node(7);
var n3 = new Node(2);
var n4 = new Node(13);
var n5 = new Node(1);
var n6 = new Node(27);
var n7 = new Node(3, null);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

var n8 = new Node(17, null);
var myList = new LinkedList(n1);
myList.insertNode(n8, 16);
myList.print();
