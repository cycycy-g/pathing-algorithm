import { BinaryHeap } from "./BinaryHeap";

type Vertex = string | number

export class WeightedGraph {
  adjacencyList: any;
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex: Vertex) {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
  }

  addEdge(
      vertex1: Vertex, 
      vertex2: Vertex, 
      weight: number
      ) {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight}); 
  }

  dijkstra(startVertex: Vertex, endVertex: Vertex) {
      const nodes = new BinaryHeap();
      const distances: any = {};
      const previous: any = {};
      let smallest;
      let path = []

      for (let vertex in this.adjacencyList) {
          if (vertex === startVertex) {
              distances[vertex] = 0;
              nodes.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
              nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }

      while(nodes.values.length) {
          smallest = nodes.dequeue().val;
          if (smallest === endVertex) {
              while (previous[smallest]) {
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          }
          if (smallest || distances[smallest] !== Infinity) {
              for (let neighbor in this.adjacencyList[smallest]) {
                  //find neighbor node
                  let neighborNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distances
                  let candidate = distances[smallest] + neighborNode.weight;
                  if(candidate < distances[neighborNode.node]) {
                      //update new smallest distance to neighbor
                      distances[neighborNode.node] = candidate;
                      //updating previous - How we got to neighbor
                      previous[neighborNode.node] = smallest;
                      //enqueue in priorityQueue 
                      nodes.enqueue(neighborNode.node, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();
  }
}
