class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    for (let i = this.adjacencyList[v].length; i >= 0; i--) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    // while (this.adjacencyList[v].length) {
    //   const adjacentVertex = this.adjacencyList[v].pop();
    //   this.removeEdge(v, adjacentVertex);
    // }
    delete this.adjacencyList[v];
  }
}

let g = new Graph();
g.addVertex("Noida");
g.addVertex("Delhi");
g.addVertex("Gurugram");
g.addVertex("Jaipur");
g.addEdge("Noida", "Gurugram");
g.addEdge("Noida", "Delhi");
g.addEdge("Noida", "Jaipur");
g.addEdge("Delhi", "Jaipur");
g.addEdge("Gurugram", "Jaipur");
g.removeVertex("Jaipur");
