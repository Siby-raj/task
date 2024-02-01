
class Node{
    constructor(value,data=0,maxValue=0){
        this.value=value;
        this.horizontal=data;
        this.maxH=maxValue;
        this.right=null;
        this.left=null;

    }
}
class BinarySearhTree{
    constructor(){
        this.root=null
        this.valueArr=[]
        this.hdArr=[]
        this.maxH=[]
        this.path1=[]
        this.path2=[]
        
    }
    insertNode(data){
        let newNode=new Node(data)
        if(this.root===null){
           this.root=newNode
       
           

        }
        else{
            let current=this.root;
            while(true){
                if(data === current.value) 
                    return
                if(data < current.value){
                    if(current.left === null){
                        current.left = newNode
                        current.left.horizontal=current.horizontal-1
                        current.left.maxH=current.maxH+1
                        
                    }
                    else{
                    current = current.left}
                } else {
                    if(current.right === null){
                        current.right = newNode
                        current.right.horizontal=current.horizontal+1
                        current.right.maxH=current.maxH+1
                        
                    } else{
                    current = current.right}
                }
            }
        }
    }
//     height(){
//         let node=this.root;
//         if(node===0){
//             console.log("The Tree is empty")
//         }
//         else{
//         function upMove(node){
//             if(node===null){
//                 return 0
//             }
//         }
//         let rightD=this.upMove(node.right)
//         let leftD=this.upMove(node.left)
//         return Math.max(rightD,leftD)+1;
//     }
 
//    console.log(uoMove(node)-1)
  
// }
inorder(rootNode = this.root) {
    if (!rootNode) return;
    else{
    this.inorder(rootNode.left);
    
  

     this.hdArr.push(rootNode.horizontal)
     this.maxH.push(rootNode.maxH)
    this.inorder(rootNode.right);}
    
} 
height(){
    this.inorder()
    let max=Math.max(...this.maxH)
    console.log("height of the tree",max)
}
leastComman(data1,data2){
       this.path(data1,this.path1)
       this.path(data2,this.path2)
      
       let result=[]
       let l1=this.path1.length
       let l2=this.path2.length
       
       for(let i=l1;i>=0;i--){
        for(let j=l2;j>=0;j--){
           
            if(this.path1[i]===this.path2[j])

                 result.push(this.path2[j])
        }

       } 
       console.log(`The Common Ancestor For ${data1} and ${data2}:`,result[1])


}
path(value,path){
    let current=this.root;
    while(current.value!==null){
    if(current.value<value){
        path.push(current.value)
        current=current.right
        }
    else if(current.value>value){
        path.push(current.value)
      current=current.left
    }
    else if(current.value===value){ 
        return path
    }
    else{
        console.log(`Pleace enter a Valid Node ${value}`)
    }
    }
 return path

    }

}


let tree=new BinarySearhTree()
tree.insertNode(100)
tree.insertNode(50)
tree.insertNode(150)
tree.insertNode(30)
tree.insertNode(130)
tree.insertNode(170)
tree.insertNode(20)
tree.insertNode(40)
tree.insertNode(110)
tree.insertNode(140)
tree.insertNode(160)
tree.insertNode(190)
tree.insertNode(45)
tree.insertNode(145)
tree.insertNode(70)
tree.insertNode(60)
tree.leastComman(190,40)
