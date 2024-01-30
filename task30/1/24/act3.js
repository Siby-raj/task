class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    insert(data){
    let curr;
    let newNode=new Node(data)
        if(this.size===0){
            this.head=newNode
            this.size++
        }
        else{
            curr=this.head
           
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
    }
    checkDuplicate(){
        let temp=[]
        let current=this.head
        let n=null;
        while(current){
             if(temp.includes(current.value)){
                n.next=current.next;
                this.size--;
                current=current.next
            }
            else{
                temp.push(current.value);
                n=current;
                current=current.next
            }

        }
    }
    print(){
        let crr=this.head;
        let output=[];
        while(crr){
            output.push(crr.value)
            crr=crr.next
        }
        console.log(output)
    }
}
let l=new LinkedList()
l.insert(10)
l.insert(20)
l.insert(30)
l.insert(20)
l.print()
l.checkDuplicate()
l.print()

