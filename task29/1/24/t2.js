class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    initialize(n) {
        for (let i = n; i > 0; i--) {
            fromStack.stack.push(i);
            this.size++;
        }
    }

    
}

let n = 3;
let fromStack = new Stack();
let auxStack = new Stack();
let toStack = new Stack();

fromStack.initialize(n);
console.log("A:" + fromStack.stack);
console.log("B:" + auxStack.stack);
console.log("C:" + toStack.stack);

let ele=0;
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 0) {
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
    if(from_rod==='A'){
        ele=fromStack.stack.pop();
        if(to_rod==='B'){
            auxStack.stack.push(ele);
        }else{
            toStack.stack.push(ele);
        }
    }else if(from_rod==='B'){
        ele=auxStack.stack.pop();
        if(to_rod==='A'){
            fromStack.stack.push(ele);
        }else{
            toStack.stack.push(ele);
        }
    }else{
        ele=toStack.stack.pop();
        if(to_rod==='A'){
            fromStack.stack.push(ele);
        }else{
            auxStack.stack.push(ele);
        }
    }

    console.log("A:"+fromStack.stack);
    console.log("B:"+auxStack.stack);
    console.log("C:"+toStack.stack);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

// Driver code 

// A, B and C are names of rods 
towerOfHanoi(n, 'A', 'C', 'B');