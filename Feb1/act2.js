class Graph {
    constructor() {
      this.list = {};
    }
    addNode(node) {
      this.list[node] = [];
    }
    addEdge(fromNode, toNode) {
      this.list[fromNode].push(toNode);
    //   this.list[toNode].push(fromNode);
    }

    
}
let gr=new Graph()

gr.addNode(1)
gr.addNode(2)
gr.addNode(3)
gr.addNode(4)
gr.addNode(5)
gr.addEdge(1,2)
gr.addEdge(1,3)
gr.addEdge(1,4)
gr.addEdge(2,3)
gr.addEdge(2,4)
console.log(gr)