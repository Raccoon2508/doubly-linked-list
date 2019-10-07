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
        this.root.next=node;
        this.root=node;
          
        }
      }

    head() {
      return this.root.data;
      
      }

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
