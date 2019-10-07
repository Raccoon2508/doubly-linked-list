const Node = require('./node');

class LinkedList {
    constructor() {
      this.root=null;
      this.tail=null;
      
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
      if(!this.root){
        this.root=node;
        this.tail=node;
        }else{
        node.prev=this.tail;
        this.tail.next=node;
        this.tail=node;
          
        }
      }

    head() {
      return this.root.data;
      
      }

    tail() {
      return this.tail.data;
      }

    at(index) {
      let count=0;
      let node=this.root;
      while(node.data){
        
        if(count===index){
          return node.data}
        count++;
        node=node.next;
        
      }
      return null;
      
      }

    insertAt(index, data) {
      let count=0;
      let curNote=this.head;
      let node=new Node();
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
                  
          }  
          
        }
      
      
      }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
