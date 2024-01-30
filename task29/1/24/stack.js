class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}
class StackByLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    pushInStack(data){
        this.head=new Node(data,this.head)
        this.size++;
    }
    popInStack(){
        if(this.head){
            this.head=this.head.next
            this.size--;
        }
        else{
            console.log("Stack is Empty")
        }
    }
}
let stack=new StackByLinkedList()
// pushing element into the stack
stack.pushInStack(100)
console.log(stack)
stack.pushInStack(400)
console.log(stack)
stack.pushInStack(300)
console.log(stack)
stack.pushInStack(500)
console.log(stack)
stack.pushInStack(600)
console.log(stack)
// pop the first element
stack.popInStack()
console.log(stack)

// Creating Linkedlist using array
class stckByArray {  
    constructor(){  
        this.data = [];  
        this.first= 0;  
    }  
    stackpush(element) {  
      this.data[this.first] = element;  
      this.first = this.first + 1;  
    }  
   stacklength() {  
      return this.first;  
   }  
   peek() {  
      return this.data[this.first-1];  
   }  
   isEmpty() {  
     return this.first == 0;  
   }  
  stackpop() {  
    if( this.isEmpty() == false ) {  
       this.first = this.first -1;  
       this.data[this.first]=null
     }  
   }  
   print() {  
      var t = this.first - 1;   
      while(t >= 0) {   
          console.log(this.data[t]);  
           t--;  
       }  
    }  
   
}  
let s=new stckByArray()
// pushing the element in the stack implemented by array 

s.stackpush(40)
s.stackpush(30)
s.stackpush(20)
s.stackpush(10)
s.print()
// poping an element in the stack implemented by array
s.stackpop()
console.log("Pop Operation")
s.print()
