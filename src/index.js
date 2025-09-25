import { knightMoves } from "./knightMoves";
import findShortestPath from "./utils/findShortestPath"

console.log(findShortestPath([0,0], [1,2], knightMoves))
console.log(findShortestPath([0,0], [3,3], knightMoves))
console.log(findShortestPath([3,3], [0,0], knightMoves))
console.log(findShortestPath([0,0], [7,7], knightMoves))