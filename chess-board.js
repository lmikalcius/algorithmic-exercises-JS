var board = "";
var gridSize = 8

for (var y = 0; y < gridSize; y++) {
  for (var x = 0; x < gridSize; x++) {
    if ((x + y) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n"
}

console.log(board);