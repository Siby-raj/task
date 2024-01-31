class Node{
    constructor(value,data=0){
        this.value=value;
        this.horizontal=data;
        this.right=null;
        this.left=null;

    }
}
class BinarySearhTree{
    constructor(){
        this.root=null
        this.valueArr=[]
        this.hdArr=[]
        
    }
    insertNode(data){
        let newNode=new Node(data)
        if(this.root===null){
           this.root=newNode
           console.log(this.horizontal)
           

        }
        else{
            let current=this.root;
            while(true){
                if(data === current.value) return undefined
                if(data < current.value){
                    if(current.left === null){
                        current.left = newNode
                        current.left.horizontal=current.horizontal-1
                        
                    }
                    current = current.left
                } else {
                    if(current.right === null){
                        current.right = newNode
                        current.right.horizontal=current.horizontal+1
                        return this
                    } 
                    current = current.right
                }
            }
        }
    }

    inorder(rootNode = this.root) {
        if (!rootNode) return;
        else{
        this.inorder(rootNode.left);
        
        this.valueArr.push(rootNode.value)
    
         this.hdArr.push(rootNode.horizontal)
        this.inorder(rootNode.right);}
        
    } 
    print(){
        this.inorder()
        console.log(this.valueArr)
        console.log(this.hdArr)
    }
    verticalOrder(){
        let result={};
        let l=this.hdArr.length;
        for(let i=0;i<l;i++){
            result[this.hdArr[i]]=[]
        }
        for(let i=0;i<this.valueArr.length;i++){
            result[this.hdArr[i]].push(this.valueArr[i])
        }
        console.log(result)

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
console.log(tree)
tree.print()
tree.verticalOrder()