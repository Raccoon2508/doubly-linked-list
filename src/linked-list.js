const Node = require('./node');

class LinkedList {
  constructor() {
  this.head=null;
  this.tail=null;
  this.length=0;
  }

append(data) {
   class Node{
     constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null;
     }
    }
  
  let node=new Node(data);
  if(!this.head){
    this.head=node;
    this.tail=node;
   
    }else{
    node.prev=this.tail;
    this.tail.next=node;
    this.tail=node;
      
    }
    
    let curNode=this.head;
    
    while(curNode){
    curNode=curNode.next;
    this.length++;
    }
  }

head() {
  return this.head.data;
  
  }

tail() {
  return this.tail.data;
  }

at(index) {
  let count=0;
  let node=this.head;
  while(node.data){
    
    if(count===index){
      return node.data}
    count++;
    node=node.next;
    
  }
  return null;
  
  }

insertAt(index, data) {
  let count=1;
  let curNote=this.head;
  
  class Node{
     constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null;
     }
    }
  let node=new Node(data);
  
  if(index==0){
    this.head.prev=node;
    node.next=this.head;
    this.head=node;
    }else{
      
    while(curNote){
      
      curNote=curNote.next;
      
      if(index==count){
        node.prev=curNote.prev;
        curNote.prev.next=node;
        node.next=curNote;
        curNote.prev=node;
        }
        count++;      
      }  
      
    }
  }

isEmpty() {
  if(!this.head){
    return true;
  }else{
    return false;
    }
      
    }
  

clear() {
  
  console.log(this.tail.data);
  
  while(this.tail.prev){
    let current=this.tail.prev;
    current.next=null;
    this.tail=current; 
    }
  if(!this.tail.prev&&this.tail.data){
    this.tail=null;
    this.head=null;
    
    
    }     
  }

deleteAt(index) {
  let count=0;
  let node=this.head;
  if(index==0){
    this.head=this.head.next;
    this.head.prev=null;
    }else{
  
  
  while(node.data){
    if(count===index){
      node.prev.next=node.next;
      node.next.prev=node.prev;
      break;
      }
    count++;
    node=node.next;
  }  
  }
  }

reverse() {
let curNode=this.head;
let prevNode=null;

while(curNode){
let nextNode=curNode.next;
curNode.next=prevNode;
curNode.prev=nextNode;

prevNode=curNode;
curNode=nextNode;
}
this.tail=this.head;
this.head=prevNode;


  
  }

indexOf(data) {
  let count=0;
  let curNode=this.head;
  
  while(curNode){
    
    
    if(curNode.data==data){
      return count;
      }
    
    curNode=curNode.next;
    count++;
    
}
  
return -1;  
}

 

}

module.exports = LinkedList;
