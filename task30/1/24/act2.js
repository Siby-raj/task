class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}
class QueueByLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    enqueue(data){
        this.head=new Node(data,this.head)
        this.size++;
    }
    dequeue() {  
        if(this.head===null){
            console.log("Queue is empty")
        }
        if(this.head.next===null){
            this.head=null
        }
        let second_last=this.head;
        while(second_last.next.next){
        second_last = second_last.next}
    second_last.next = null;
     this.size--;
   
}
print(){
    let crr=this.head;
    let output=[]
    while(crr){
        output.push(crr.value)
        crr=crr.next
    }
    console.log(output)
}
}
let w= new QueueByLinkedList()
w.enqueue(10)
w.enqueue(300)
w.enqueue(500)
w.print()

w.dequeue()
w.print()
w.dequeue()
w.print()
// Creating queue using array
class QueueByArray {  
    constructor(){  
        this.data = []; 

        this.first= 0;  
        this.back=0
    }  
    enqueue(element) {
      this.data[this.back] = element; 
      this.back++;
       
      
      } 
    
   length() {  
      return this.back;  
   }  
   peek() {  
      return this.data[this.first];  
   }  
 
  dequeue() {  
  
    // delete this.data[this.first]
    let l=this.length-1;
    if(this.back!==0){
    for(let i=0;i<l;i++){
    this.data[i]=this.data[i+1]
    
   } 
   this.data.length=this.back-1;
   this.back--
}
else{
    console.log("Queue is Empty")
}
}
   print() {  
     return this.data
    }  
   
}  
let s=new QueueByArray()

// pushing the element in the stack implemented by array 
s.dequeue()
s.enqueue(2)
console.log(s)
s.enqueue(3)
console.log(s)
s.enqueue(1)
s.enqueue(4)
console.log(s)

s.dequeue()
s.dequeue()
let q=s.print()
console.log(q)
console.log(s)

