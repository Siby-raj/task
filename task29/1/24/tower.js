class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    top() {
        return this.items[this.items.length - 1];
    }
}

function transferDisk(a, b) {
    if (b.isEmpty()) {
        b.push(a.top());
        a.pop();
        return 1;
    } else if (a.isEmpty()) {
        a.push(b.top());
        b.pop();
        return 2;
    } else {
        if (b.top() > a.top()) {
            b.push(a.top());
            a.pop();
            return 1;
        } else {
            a.push(b.top());
            b.pop();
            return 2;
        }
    }
}


    let s = new Stack();
    let a = new Stack();
    let d = new Stack();

function master(n){
    

    for (let i = n; i >= 1; i--) {
        s.push(i);
    }
   console.log(s)
   console.log(a)
   console.log(d)
    let x = Math.pow(2, n) - 1;
    let i = 1;

    if (n % 2 === 0) {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transferDisk(s, a);
                let v;
                if (y === 1) {
                    console.log(`Move the disk ${a.top()} from source to auxiliary`);
                    console.log(s)
                    console.log(a)
                     console.log(d)
                              } else {
                    console.log(`Move the disk ${s.top()} from auxiliary to source`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            } else if (i % 3 === 2) {
                let y = transferDisk(s, d);
                if (y === 1) {
                    console.log(`Move the disk ${d.top()} from source to destination`);
                    console.log(s)
                     console.log(a)
                     console.log(d)
                } else {
                    console.log(`Move the disk ${s.top()} from destination to source`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            } else {
                let y = transferDisk(a, d);
                if (y === 1) {
                    console.log(`Move the disk ${d.top()} from auxiliary to destination`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                } else {
                    console.log(`Move the disk ${a.top()} from destination to auxiliary`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            }
            i++;
        }
    } else {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transferDisk(s, d);
                if (y === 1) {
                    console.log(`Move the disk ${d.top()} from source to destination`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                } else {
                    console.log(`Move the disk ${s.top()} from destination to source`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            } else if (i % 3 === 2) {
                let y = transferDisk(s, a);
                if (y === 1) {
                    console.log(`Move the disk ${a.top()} from source to auxiliary`);
                    console.log(s)
                    console.log(a)
                  console.log(d)
                } else {
                    console.log(`Move the disk ${s.top()} from auxiliary to source`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            } else {
                let y = transferDisk(a, d);
                if (y === 1) {
                    console.log(`Move the disk ${d.top()} from auxiliary to destination`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                } else {
                    console.log(`Move the disk ${a.top()} from destination to auxiliary`);
                    console.log(s)
                    console.log(a)
                    console.log(d)
                }
            }
            i++;
        }
    }

    
}

master(4)
