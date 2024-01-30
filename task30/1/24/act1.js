class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(head=null) {
        this.head=head;
        this.size=0;
    }
    addData(data){
        this.head=new Node(data,this.head);
        this.size++;
     }
     removeDataAtBegining(){
        this.head=this.head.next
     }
     insertAt(data, index) {
        if (index > 0 && index > this.size) {
          return;
        }
        if (index === 0) {
          this.addData(data);
          return;
        }
    
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
    
        while (count < index) {
          previous = current; 
          count++;
          current = current.next; 
        }
    
        node.next = current;
        previous.next = node;
    
        this.size++;
      }
      insertAtBefore(data,index){
        this.insertAt(data,index-1)
      }
      insertAtAfter(data,index){
        this.insertAt(data,index+1)
      }


      printListData() {
        let current = this.head;
    
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
}


let s=new LinkedList()
console.log(s)

// adding a new node in the head node 
 
s.addData(50);
console.log(s)
s.addData(600);
console.log(s)
s.addData(700);
console.log(s)
// add node at specific index
s.insertAt(100,2)
console.log(s)
s.insertAtAfter(400,2)
s.printListData()
s.insertAtBefore(500,3)
s.printListData()
console.log("remove the element at the start")
console.log(s)
s.removeDataAtBegining()
console.log(s)
s.printListData()