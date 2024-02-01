// Javascript program to implement optimized delete in BST.

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    }
    
   
    function inorder(root) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.key);
        inorder(root.right);
    }
    }
    
   
    function insert(node, key) {
  
    if (node === null) {
        return new Node(key);
    }
    
  
    if (key < node.key) {
        node.left = insert(node.left, key);
    } else {
        node.right = insert(node.right, key);
    }
    
  
    return node;
    }
    
    function deleteNode(root, k) {

    if (root === null) {
        return root;
    }
    
  
    if (root.key > k) {
        root.left = deleteNode(root.left, k);
        return root;
    } else if (root.key < k) {
        root.right = deleteNode(root.right, k);
        return root;
    }
    
 
    if (root.left === null) {
        let temp = root.right;
        delete root;
        return temp;
    } else if (root.right === null) {
        let temp = root.left;
        delete root;
        return temp;
    }
    
    // If both children exist
    else {
        let succParent = root;
    
        let succ = root.right;
        while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
        }
    
       
        if (succParent !== root) {
        succParent.left = succ.right;
        } else {
        succParent.right = succ.right;
        }
    
       
        root.key = succ.key;
    
      
        delete succ;
        return root;
    }
    }
    
    
    (function main() {
 
    let root = null;
    root = insert(root, 100);
    root = insert(root, 50);
    root = insert(root, 150);
    root = insert(root, 30);
    root = insert(root, 70);
    root = insert(root, 130);
    root = insert(root, 170);
    root = insert(root, 20);
    root = insert(root, 40);
    root = insert(root, 110);
    root = insert(root, 140);
    root = insert(root, 160);
    root = insert(root, 190);
    root = insert(root, 45);
    root = insert(root, 145);
    
    
    console.log("Original BST: ");
    inorder(root);
    

    root = deleteNode(root, 20);
    console.log("Modified BST tree after deleting Leaf Node:\n");
    inorder(root);
    
   
    root = deleteNode(root, 40);
    console.log("Modified BST tree after deleting single child Node:\n");
    inorder(root);
    
 
    root = deleteNode(root, 150);
    console.log("Modified BST tree after deleting both child Node:\n");
    inorder(root);
    })();
    