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

  depthFirstRecursive(startPoint) {
    const resultList = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      resultList.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }

    dfs(startPoint);

    return resultList;
  }

  depthFirstIterative(startPoint) {
    const stack = [startPoint];
    const visited = {};
    const resultList = [];
    let currentVertex;

    visited[startPoint] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      resultList.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return resultList;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
