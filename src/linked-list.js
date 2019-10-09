const Node = require('./node');

class LinkedList {
  constructor() {
  this._tail=null;
  this._head=null;
  this.length=0;
}

  append(data) {
    let node=new Node(data);
      
    if(!this._head){
      this._head=node;
      this._tail=node;
      }else{
      node.prev=this._tail;
      this._tail.next=node;
      this._tail=node;
      }
      
    
      let curNode=this._head;
      this.length=0;
      while(curNode){
      curNode=curNode.next;
      this.length++;
      }
      return this;
  }

  head() {
    
    if(this._head){
      return this._head.data;
    }else{
      return null;}
    }

  tail() {
    if(this._tail){
      return this._tail.data;
    }else{
      return null;}
  }

  at(index) {
    let count=0;
    let node=this._head;
    
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
    let curNote=this._head;
    let node=new Node(data);
    
    if(index==0&&this.length==0){
      this._head=node;
      this._head.data=data;
    }else if(index==0&&this.length!=0){
      this._head.prev=node;
      node.next=this._head;
      this._head=node;
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
      
    let curNode=this._head;
    this.length=0;
    while(curNode){
      curNode=curNode.next;
      this.length++;
    }
      
    return this;  
  }

  isEmpty() {
    if(!this._head){
      return true;
    }else{
      return false;
    }
  }
    

  clear() {
    while(this._tail.prev){
      let current=this._tail.prev;
      current.next=null;
      this._tail=current; 
      }
    if(!this._tail.prev){
      this._tail=null;
      this._head=null;
    } 
    this.length=0;
    return this;
  }

  deleteAt(index) {
    let count=0;
    let node=this._head;
    if(index==0&&this.length!=1){
      this._head=this._head.next;
      this._head.prev=null;}
    else if(index==0&&this.length==1){
      this._head=null;
    }else{
    while(node){
      if(count===index){
        node.prev.next=node.next;
        if(node.next.prev){node.next.prev=node.prev};
        break;
      }
      count++;
      node=node.next;
      }  
    }
    
    let curNode=this._head;
    this.length=0;
    while(curNode){
      curNode=curNode.next;
      this.length++;
    }
    return this;
  }

  reverse() {
  let curNode=this._head;
  let prevNode=null;

  while(curNode){
    let nextNode=curNode.next;
    curNode.next=prevNode;
    curNode.prev=nextNode;
    prevNode=curNode;
    curNode=nextNode;
  }

  this._tail=this._head;
  this._head=prevNode;

  return this;
  }

  indexOf(data) {
    let count=0;
    let curNode=this._head;
    
    while(curNode){
    if(curNode.data==data){
      return count;
    }
      
    curNode=curNode.next;
    count++;
    }
  return -1;  
  }

  print(){
    let cur=this._head;
    while(cur){
      console.log(cur.data);
      cur=cur.next;
    }
  }
}
module.exports = LinkedList;
