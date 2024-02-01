//this for sum of single child parent node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
        this.arr=[]
    }
    path(node=null){
        let current;
        if(node!==null){
            current = node;
        }else{
            current = this.root;
        }
            if (current && current.right !== null && current.left === null){
               
                this.arr.push(current.value);
                this.path(current.right);
            
            }else if (current && current.right === null && current.left !== null) {
              
                this.arr.push(current.value);
                this.path(current.left);
                //current = current.left;
            }else{
                if(current && current.left!==null && current.right!==null){
                    this.path(current.left);
                    this.path(current.right);
                }
            }
        //console.log(this.arr);
    }
    insert(values) {
        let current,
            node = new Node(values);
        if (this.root === null) {
            this.root = node;
        } else {
            current = this.root;
            while (true) {
                if (current.value === values) {
                    //console.log("value already exists!");
                    return;
                } else {
                    if (values < current.value) {
                        if (current.left === null) {
                            current.left = node;
                        } else {
                            current = current.left;
                        }
                    } else {
                        if (current.right === null) {
                            current.right = node;
                        } else {
                            current = current.right;
                        }
                    }
                }
            }
        }
    }
}

let bst1 = new Bst();
bst1.insert(100);
bst1.insert(50);
bst1.insert(150);
bst1.insert(30);
bst1.insert(70);
bst1.insert(130);
bst1.insert(170);
bst1.insert(20);
bst1.insert(40);
bst1.insert(110);
bst1.insert(140);
bst1.insert(160);
bst1.insert(190);
bst1.insert(45);
bst1.insert(145);
bst1.insert(200);
bst1.insert(205);
bst1.insert(46);
bst1.path();
console.log(bst1.arr);
let res=0;
for(let i=0;i<bst1.arr.length;i++){
    res+=bst1.arr[i];
}
console.log(`The sum of the single child parent is:${res}`);

function deleteNode(data) {

if (root === null) {
    return root;
}

if (root.value > k) {
    root.left = deleteNode(root.left, k);
    return root;
} else if (root.value < k) {
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

    // Find successor
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

    
    root.value = succ.value;

    delete succ;
    return root;
}
}