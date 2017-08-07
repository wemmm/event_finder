function EventFinder() {
  this.TOTAL_EVENTS = 10;
  this.world = new World;
  this.eventCoordinates = [];
  this.userCoordinates = null;
  this.generateEvents();
}

EventFinder.prototype.generateEvents = function () {
  var times = this.TOTAL_EVENTS
  for(var i=0; i < times; i++){
    var x = this.randomXCoordinate()
    var y = this.randomYCoordinate()
    this.eventCoordinates.push([x, y])
    this.world.grid[x][y] = new Event(i + 1);
  };
};

EventFinder.prototype.randomXCoordinate = function () {
  return Math.floor(Math.random()*this.world.X_AXIS-1+1)
};

EventFinder.prototype.randomYCoordinate = function () {
  return Math.floor(Math.random()*this.world.Y_AXIS-1+1)
};

EventFinder.prototype.getUserCoordinates = function (x, y) {
  this.userCoordinates = [x, y]
};
