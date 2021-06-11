import { BinaryHeap } from "../datastructures/BinaryHeap";

interface Node {
    col: number;
    row: number;
    isStart: boolean;
    isFinish: boolean;
    distance: number;
    isVisited: boolean;
    isWall: boolean;
}

export function dijkstra(graph: Node[], start: Node, finish: Node): Array<any> {
    const nodes = new BinaryHeap();
    const path: any = []; //to return at end
    let smallest: Node;
    //build up initial state
    for (const row of graph) {
        for(const col of row as any) {
            if (col === start) {
                nodes.enqueue(col, 0);
            } else {
                nodes.enqueue(col, Infinity);
            }
        }
    }
    const visitedNodes: Node[] = [];
    // as long as there is something to visit
    while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        console.log(smallest);
        // console.log(smallest);
        if (smallest.distance !== Infinity) {
            smallest.isVisited = true;
            visitedNodes.push(smallest);
        }
        if (smallest === finish) return visitedNodes;
    }
    return visitedNodes;
}
