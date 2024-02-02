class Graph {
    constructor(numNodes) {
      this.list = [];
      for (let i = 0; i < numNodes; i++) {
        this.list.push(new Array(numNodes).fill(0));
      }
    }
    
    addEdge(fromNode, toNode) {
        this.list[fromNode][toNode] = 1;
        // this.list[toNode][fromNode]=1;

    }

    
}

let gr1=new Graph(5)
gr1.addEdge(1,2)
gr1.addEdge(1,3)
gr1.addEdge(1,4)
gr1.addEdge(2,3)
gr1.addEdge(2,4)

console.log(gr1)