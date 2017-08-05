function EventFinder() {
  this.TOTAL_EVENTS = 10;
  this.world = new World;
  this.generateEvents();
}

EventFinder.prototype.generateEvents = function () {
  var times = this.TOTAL_EVENTS
  for(var i=0; i < times; i++){
    this.world.grid[this.randomXCoordinate()][this.randomYCoordinate()] = new Event(i + 1);
  };
};

EventFinder.prototype.randomXCoordinate = function () {
  return Math.floor(Math.random()*this.world.X_AXIS-1+1)
};

EventFinder.prototype.randomYCoordinate = function () {
  return Math.floor(Math.random()*this.world.Y_AXIS-1+1)
};
