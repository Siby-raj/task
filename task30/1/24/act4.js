class Node{
    constructor(value){
     this.value=value;
     this.right=null;
     this.left=null;
    }
}
class BST{
    constructor(){
        this.root=null;
        this.height=0;
        this.inorderarr=[]
        this.preorderarr=[]
        this.postorderarr=[]
        
    }

    
    insertBranch(data){
        const newNode = new Node(data)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(data === current.value) return undefined
            if(data < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if(current.right === null){
                    current.right = newNode
                    return this
                } 
                current = current.right
            }
        }
    }
    preorder(rootNode = this.root) {
        
        if (!rootNode) return;

        this.preorderarr.push(rootNode.value)
        this.preorder(rootNode.left);
        this.preorder(rootNode.right);
    }
    inorder(rootNode = this.root) {
        if (!rootNode) return;

        this.inorder(rootNode.left);
        this.inorderarr.push(rootNode.value)
        this.inorder(rootNode.right);
    } 
    postorder(rootNode = this.root) {
        if (!rootNode) return;

       
        this.postorder(rootNode.left);
        this.postorder(rootNode.right);
        this.postorderarr.push(rootNode.value)
    }
    print(){
        console.log(this.preorderarr)
        console.log(this.inorderarr)
        console.log(this.postorderarr)
    }
}
let A=new BST();
A.insertBranch(5)
console.log(A)
A.insertBranch(4)
console.log(A)
A.insertBranch(6)
console.log(A)
A.insertBranch(3)
console.log(A)
A.insertBranch(9)
console.log(A)
A.insertBranch(2)
console.log(A)

A.inorder()

A.postorder()
A.preorder()
A.print()