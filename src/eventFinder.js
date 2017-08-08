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
    var event = new Event(i + 1)
    this.eventCoordinates.push({'event': event, 'coordinateTotal': x + y, 'coordinates': [x, y]})
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

EventFinder.prototype.closestEvents = function () {
  var events = this.eventCoordinates;
  var userCoordinateTotal = this.userCoordinates[0] + this.userCoordinates[1];
  events.sort(function(a,b) {
    if ((a.coordinateTotal - userCoordinateTotal) < (b.coordinateTotal - userCoordinateTotal))
      return -1;
    if ((a.coordinateTotal - userCoordinateTotal) > (b.coordinateTotal - userCoordinateTotal))
      return 1;
    return 0;
  });
    this.eventCoordinates = events.splice(-5, 5)
};

EventFinder.prototype.returnEventList = function () {
  var events = this.eventCoordinates
  var userCoordinateTotal = this.userCoordinates[0] + this.userCoordinates[1];
  var formattedEvents = events.map(function(x) {
    return `Event 00${x.event.idNumber}
    Out of ${x.event.tickets.length} available tickets, the cheapest one is $${x.event.getCheapestTicket()}.
    Its distance from you is ${Math.abs(x.coordinateTotal - userCoordinateTotal)}`
  });
    return formattedEvents
};
