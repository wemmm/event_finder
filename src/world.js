function World() {
  this.X_AXIS = 20
  this.Y_AXIS = 20
  this.grid = []
  this.generateGrid();
}

World.prototype.generateGrid = function () {
  var newGrid = new Array(this.X_AXIS);
  for (i = 0; i < this.X_AXIS; i++) {
    newGrid[i] = new Array(this.Y_AXIS);
    for (j = 0; j < this.Y_AXIS; j++) {
      newGrid[i][j] = '[' + i + ', ' + j + ']';
    }
  }
  this.grid = newGrid
};
