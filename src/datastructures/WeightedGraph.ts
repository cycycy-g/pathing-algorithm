type Vertex = string | number;

export class WeightedGraph {
  adjacencyList: any;
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex: Vertex): void {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
  }

  addEdge(
      vertex1: Vertex, 
      vertex2: Vertex, 
      weight: number
  ): void {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight}); 
  }
}
