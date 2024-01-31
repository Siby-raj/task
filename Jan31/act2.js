
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
tree.height()
